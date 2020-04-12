import React, { useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { useComplexLanguageMethod } from '../contexts/languageContext';
import { from } from 'rxjs';
import { Suggestions } from '../projects/Default';

const subject$ = new BehaviorSubject('');

export const getSuggestionsFromArray = (projects) => (subject) => {
  return subject.pipe(
    debounceTime(500), // wait until user stops typing
    distinctUntilChanged(),
    map((value) =>
      !value || value === ''
        ? projects
        : projects.filter((p) => p.toLocaleLowerCase().startsWith(value))
    )
  );
};

// const List = React.memo(({ suggestions = [] }) => {
//   return (
//     <div>
//       {suggestions.map((suggestion) => (
//         <p>{suggestion}</p>
//       ))}
//     </div>
//   );
// });

const ProjectsContainer = ({ getSuggestions }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const changeSearchValue = React.useCallback(
    ({ target: { value } }) => {
      setSearchValue(value);
      subject$.next(value);
    },
    [setSearchValue]
  );

  React.useEffect(() => {
    const subscription = getSuggestions(subject$).subscribe(
      (newSuggestions) => {
        setSuggestions(newSuggestions);
      },
      (error) => {
        console.error(error);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <label htmlFor='search-project'></label>
      <input
        id='search-project'
        type='text'
        placeholder='Search'
        value={searchValue}
        onChange={changeSearchValue}
      />
      <Suggestions suggestions={suggestions} />
    </>
  );
};

function Projects() {
  const { t } = useComplexLanguageMethod();
  const getSuggestions = getSuggestionsFromArray(['aaa', 'bbb', 'ccc']);
  return (
    <div>
      <p>{t('projectsPageText')}</p>
      <ProjectsContainer getSuggestions={getSuggestions} />
    </div>
  );
}

export default Projects;
