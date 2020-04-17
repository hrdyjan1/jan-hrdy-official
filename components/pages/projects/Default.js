import React from 'react';
import { subject$, searchTypes } from '../../../pages/projects';
import Intro from './Intro';
import List from './List';
import SearchType from './SearchType';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';
import { entities } from '../../../config/projects';

const MAX_INPUT_SUGGESTIONS = 5;

const getUniquePropertyValuesFromHashMap = ({ property, hashMap, ids }) => {
  return ids
    .map((id) => hashMap[id][property])
    .filter((value, index, self) => self.indexOf(value) === index);
};

const createSuggestionElements = ({ innerHTML, onclick = () => {} }) => {
  const li = document.createElement('li');
  li.style.transition = 'opacity .5s linear';
  li.getBoundingClientRect();
  li.style.opacity = 1;
  li.innerHTML = innerHTML;
  li.onclick = onclick;
  return li;
};

const Default = ({ getSuggestions }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [searchTypeValue, setSearchTypeValue] = React.useState(searchTypes.title);
  const [isFocused, setFocused] = React.useState(false);
  const ulRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const { t } = useComplexLanguageMethod();

  const changeSearchValue = (value) => {
    setSearchValue(value);
    subject$.next(value);
  };

  const changeInputValue = React.useCallback(({ target: { value } }) => changeSearchValue(value), [
    changeSearchValue,
    setSearchValue,
  ]);

  // Clear visible suggesting results
  const hideResults = (shouldClear) => {
    ulRef.current.classList.add('hidden');
    if (shouldClear) {
      ulRef.current.innerHTML = '';
    }
  };

  // Focused on input
  const setFocusOn = () => {
    if (!isFocused) {
      setFocused(true);
    }
  };

  // Focused off input
  const setFocusOff = () => {
    if (isFocused) {
      setFocused(false);
    }
  };

  const handleShowingSuggestions = () => {
    hideResults(true);
    const searchValueLower = searchValue.toLowerCase();

    if (suggestions.length === 0) {
      const innerHTML = `Whoah! <strong>${searchValueLower}</strong> is not in the index`;
      ulRef.current.appendChild(createSuggestionElements({ innerHTML }));
    } else if (suggestions.length > 0) {
      const obj = { property: searchTypeValue, hashMap: entities, ids: suggestions };
      const uniqueSuggestionNames = getUniquePropertyValuesFromHashMap(obj);

      for (let i = 0; i < uniqueSuggestionNames.length && i < MAX_INPUT_SUGGESTIONS; i++) {
        const nameOfSuggestion = uniqueSuggestionNames[i];
        const nameOfSuggestionLowerCase = nameOfSuggestion.toLowerCase();
        const replacedValue = `<strong>${searchValueLower}</strong>`;
        const innerHTML = nameOfSuggestionLowerCase.replace(searchValueLower, replacedValue);
        const onclick = () => changeSearchValue(nameOfSuggestionLowerCase);

        ulRef.current.appendChild(createSuggestionElements({ onclick, innerHTML }));
      }
    }

    if (ulRef.current.className !== 'term-list') {
      ulRef.current.className = 'term-list';
    }
  };

  const handleClearingSuggestions = (event) => {
    const isClickedOnSuggestionBar =
      event.target.tagName === 'UL' ||
      event.target.tagName === 'LI' ||
      event.target.tagName === 'INPUT';
    if (!isClickedOnSuggestionBar) {
      setFocusOff();
    }
  };

  // Handled suggestions
  React.useEffect(() => {
    if (isFocused) {
      handleShowingSuggestions();
    } else {
      hideResults();
    }
  }, [isFocused, suggestions]);

  // Handled focus on input
  React.useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    body.addEventListener('click', handleClearingSuggestions);
    inputRef.current.addEventListener('focusin', setFocusOn);
    inputRef.current.addEventListener('keyup', setFocusOn);
    return () => {
      body.removeEventListener('click', handleClearingSuggestions);
      inputRef.current.removeEventListener('focusin', setFocusOn);
      inputRef.current.removeEventListener('keyup', setFocusOn);
    };
  }, [handleClearingSuggestions, setFocusOn]);

  // Handled new suggestions from "API"
  React.useEffect(() => {
    const subscription = getSuggestions(subject$, searchTypeValue).subscribe(
      (newSuggestions) => {
        setSuggestions(newSuggestions);
      },
      (error) => {
        console.error(error);
      }
    );

    return () => subscription.unsubscribe();
  }, [searchTypeValue, getSuggestions]);

  return (
    <div id='project-container'>
      <Intro />
      <div className='wrapper-search'>
        <SearchType searchTypeValue={searchTypeValue} changeSearchTypeValue={setSearchTypeValue} />
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
      <List projects={suggestions} />
    </div>
  );
};

export default Default;
