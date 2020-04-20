import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Default from '../components/pages/projects/Default';
import { englishProjectList, czechProjectList } from '../config/projects';
import memoize from 'lodash/memoize';
import { useLanguageState } from '../contexts/languageContext';

const searchTypes = {
  title: 'title',
  type: 'type',
};

const getFirstKey = (object) => Object.keys(object)[0];

const getUniqueByKey = (array) => [
  ...new Map(array.map((item) => [item[getFirstKey(item)], item])).values(),
];

const filterByProperty = (searchValue) => (results, originalKeyValue) => {
  // ex. OriginalKeyValue = {123123: "Web App"}
  const originalKey = getFirstKey(originalKeyValue);
  const originalValue = originalKeyValue[originalKey];
  const isIncludedSearchValue = originalValue.toLowerCase().includes(searchValue.toLowerCase());
  return isIncludedSearchValue ? [...results, originalKey] : results;
};

/**
 * return function that returns array of ids, that are filtering by value from subject
 * @list        {Object}            Included 2 keys: { results: [ids], entities: {id: {oneList}}
 * @subject     {BehaviorSubject}   Special rxjs object for handling async operation
 * @property    {string}            <searchType: title, subSubtitle, year>
 */

const getSuggestionsFromArray = (list) => (subject, property = searchTypes.title) => {
  const ids = list.results;
  const entities = list.entities;

  const getKeyPropertyValueArray = memoize((currentProperty) =>
    Object.entries(entities).map((o) => ({ [o[0]]: o[1][currentProperty] }))
  );

  return subject.pipe(
    debounceTime(200), // wait until user stops typing
    distinctUntilChanged(),
    map((searchValue) => {
      console.log('searchValue', searchValue);
      if (!searchValue || searchValue === '') {
        // All ids
        return ids;
      } else {
        // Ids filtered by property  ; ex. [123123, 456456]
        return getKeyPropertyValueArray(property).reduce(filterByProperty(searchValue), []);
      }
    })
  );
};

function Projects() {
  const { isCzechLanguage } = useLanguageState();
  const currentLanguageList = isCzechLanguage ? czechProjectList : englishProjectList;
  const getSuggestions = getSuggestionsFromArray(currentLanguageList);
  const subject$ = new BehaviorSubject('');

  return (
    <div id='page-project-id'>
      <Default getSuggestions={getSuggestions} subject$={subject$} />
    </div>
  );
}

export default Projects;
export { searchTypes, getSuggestionsFromArray };
