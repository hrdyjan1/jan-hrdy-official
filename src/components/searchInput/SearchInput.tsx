// Add this at the top of your file to mark it as a client component
'use client';

import { SEARCH_POSSIBILITIES } from '@/app/projects/utils/searchPossibilities';
import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';
import React from 'react';

interface Props {
  searchPossibility: keyof typeof SEARCH_POSSIBILITIES;
  changeSearchPossibility: (value: keyof typeof SEARCH_POSSIBILITIES) => void;
}

const SearchType = ({ searchPossibility, changeSearchPossibility }: Props) => {
  const { t } = useLanguageTranslation();

  const chooseValue = (value: keyof typeof SEARCH_POSSIBILITIES) => {
    if (searchPossibility !== value) {
      changeSearchPossibility(value);
    }
  };

  const chooseFirst = () => chooseValue(SEARCH_POSSIBILITIES.title);
  const chooseSecond = () => chooseValue(SEARCH_POSSIBILITIES.type);

  return (
    <>
      <input
        id='name-id'
        name='action'
        type='radio'
        value='name'
        checked={searchPossibility === SEARCH_POSSIBILITIES.title}
        onChange={chooseFirst}
      />
      <label htmlFor='name-id' onClick={chooseFirst}>
        {t('name')}
      </label>
      <input
        id='type-id'
        name='action'
        type='radio'
        value='type'
        checked={searchPossibility === SEARCH_POSSIBILITIES.type}
        onChange={chooseSecond}
      />
      <label htmlFor='type-id' onClick={chooseSecond}>
        {t('type')}
      </label>
      <div id='arrow'></div>
    </>
  );
};

export default SearchType;
