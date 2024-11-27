// Add this at the top of your file to mark it as a client component
'use client';

import { czechEntities, englishEntities } from '@/app/projects/utils/projectData';
import { GetSuggestionsType } from '@/app/projects/types';
import { SEARCH_POSSIBILITIES } from '@/app/projects/utils/searchPossibilities';
import { useLanguageState } from '@/features/language/helpers';
import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';
import React from 'react';
import { BehaviorSubject } from 'rxjs';
import Intro from '../intro/Intro';
import { EmptyFunction } from '@/types/EmptyFunction';
import SearchType from '../searchInput/SearchInput';
import { noop } from 'lodash';
import { ProjectList } from '../projectList/ProjectList';

const MAX_INPUT_SUGGESTIONS = 5;

function getUniquePropertyValuesFromHashMap<T>({
  property,
  hashMap,
  ids,
}: {
  property: string;
  hashMap: Record<string, Record<string, T>>;
  ids: string[];
}) {
  return ids
    .map((id) => hashMap[id][property])
    .filter((value, index, self) => self.indexOf(value) === index) as string[];
}

const createSuggestionElements = ({
  innerHTML,
  onclick,
}: {
  innerHTML: string;
  onclick?: EmptyFunction;
}) => {
  const li = document.createElement('li');
  li.style.transition = 'opacity .5s linear';
  li.getBoundingClientRect();
  li.style.opacity = '1';
  li.innerHTML = innerHTML;
  li.onclick = onclick ?? noop;
  return li;
};

interface Props {
  getSuggestions: GetSuggestionsType;
  subject$: BehaviorSubject<string>;
}

const ProjectBoard = ({ getSuggestions, subject$ }: Props) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [searchTypeValue, setSearchTypeValue] =
    React.useState<keyof typeof SEARCH_POSSIBILITIES>('title');

  const [isFocused, setFocused] = React.useState(false);
  const ulRef = React.useRef<HTMLUListElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { t } = useLanguageTranslation();
  const { language } = useLanguageState();
  const isCzechLanguage = language === 'CZECH';
  const currentLanguageEntities = isCzechLanguage ? czechEntities : englishEntities;

  const changeSearchValue = React.useCallback(
    (value: string) => {
      setSearchValue(value);
      subject$.next(value);
    },
    [subject$]
  );

  const changeInputValue = React.useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => changeSearchValue(value),
    [changeSearchValue]
  );

  // Clear visible suggesting results
  const hideResults = (shouldClear?: boolean) => {
    ulRef.current?.classList.add('hidden');
    if (shouldClear && ulRef.current) {
      ulRef.current.innerHTML = '';
    }
  };

  // Focused on input
  const setFocusOn = React.useCallback(() => {
    setFocused(true);
  }, []);

  // Focused off input
  const setFocusOff = React.useCallback(() => {
    setFocused(false);
  }, []);

  const handleShowingSuggestions = React.useCallback(() => {
    hideResults(true);
    const searchValueLower = searchValue.toLowerCase();

    if (suggestions.length === 0) {
      const innerHTML = `Whoah! <strong>${searchValueLower}</strong> is not in the index`;
      ulRef.current?.appendChild(createSuggestionElements({ innerHTML }));
    } else if (suggestions.length > 0) {
      const obj = { property: searchTypeValue, hashMap: currentLanguageEntities, ids: suggestions };
      const uniqueSuggestionNames = getUniquePropertyValuesFromHashMap(obj);

      for (let i = 0; i < uniqueSuggestionNames.length && i < MAX_INPUT_SUGGESTIONS; i++) {
        const nameOfSuggestion = uniqueSuggestionNames[i];
        const nameOfSuggestionLowerCase = nameOfSuggestion.toLowerCase();
        const replacedValue = `<strong>${searchValueLower}</strong>`;
        const innerHTML = nameOfSuggestionLowerCase.replace(searchValueLower, replacedValue);
        const onclick = () => changeSearchValue(nameOfSuggestionLowerCase);

        ulRef.current?.appendChild(createSuggestionElements({ onclick, innerHTML }));
      }
    }

    if (ulRef.current && ulRef.current.className !== 'term-list') {
      ulRef.current.className = 'term-list';
    }
  }, [changeSearchValue, currentLanguageEntities, searchTypeValue, searchValue, suggestions]);

  const handleClearingSuggestions = React.useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickedOnSuggestionBar =
        target.tagName === 'UL' || target.tagName === 'LI' || target.tagName === 'INPUT';
      if (!isClickedOnSuggestionBar) {
        setFocusOff();
      }
    },
    [setFocusOff]
  );

  // Handled suggestions
  React.useEffect(() => {
    if (isFocused) {
      handleShowingSuggestions();
    } else {
      hideResults();
    }
  }, [handleShowingSuggestions, isFocused]);

  // Handled focus on input
  React.useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    body.addEventListener('click', handleClearingSuggestions);
    inputRef.current?.addEventListener('focusin', setFocusOn);
    inputRef.current?.addEventListener('keyup', setFocusOn);
    return () => {
      body.removeEventListener('click', handleClearingSuggestions);
      inputRef.current?.removeEventListener('focusin', setFocusOn);
      inputRef.current?.removeEventListener('keyup', setFocusOn);
    };
  }, [handleClearingSuggestions, setFocusOn]);

  // Handled new suggestions from "API"
  React.useEffect(() => {
    const subscription = getSuggestions(subject$, searchTypeValue).subscribe(
      setSuggestions,
      console.error
    );

    return () => subscription.unsubscribe();
  }, [searchTypeValue, getSuggestions, subject$]);

  React.useEffect(() => {
    setSearchValue('');
  }, [isCzechLanguage]);

  return (
    <div id='project-container'>
      <Intro header='projects' subHeader='projectsDescription' />
      <div className='wrapper-search'>
        <SearchType
          searchPossibility={searchTypeValue}
          changeSearchPossibility={setSearchTypeValue}
        />
        <input
          // autoFocus
          type='text'
          id='searchBox'
          ref={inputRef}
          autoComplete='off'
          className='search-field'
          value={searchValue}
          onChange={changeInputValue}
          placeholder={`${t('search')}...`}
        />
      </div>
      <ul ref={ulRef} id='searchResults' className='term-list hidden'></ul>
      <ProjectList projects={suggestions} />
    </div>
  );
};

export { ProjectBoard };
