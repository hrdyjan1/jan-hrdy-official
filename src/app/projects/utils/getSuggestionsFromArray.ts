// Add this at the top of your file to mark it as a client component
'use client';

import memoize from 'lodash/memoize';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { GetSuggestionsType, ProjectListType } from '../types';
import { SEARCH_POSSIBILITIES } from './searchPossibilities';

const getFirstKey = (object: Record<string, unknown>) => Object.keys(object)[0];

const filterByProperty =
  (searchValue: string) => (results: string[], originalKeyValue: Record<string, string>) => {
    const originalKey = getFirstKey(originalKeyValue);
    const originalValue = originalKeyValue[originalKey];
    const isIncludedSearchValue = originalValue.toLowerCase().includes(searchValue.toLowerCase());
    return isIncludedSearchValue ? [...results, originalKey] : results;
  };

const getSuggestionsFromArray: (list: ProjectListType) => GetSuggestionsType =
  (list) => (subject, possibility) => {
    const ids = list.results;
    const entities = list.entities;

    const getKeyPropertyValueArray = memoize(
      (currentPossibility: keyof typeof SEARCH_POSSIBILITIES) =>
        Object.entries(entities).map((o) => ({ [o[0]]: o[1][currentPossibility] }))
    );

    return subject.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((searchValue) => {
        if (!searchValue || searchValue === '') {
          return ids;
        } else {
          return getKeyPropertyValueArray(possibility).reduce(filterByProperty(searchValue), []);
        }
      })
    );
  };

export { getSuggestionsFromArray };
