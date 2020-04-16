import React from 'react';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';

const SearchType = ({ searchTypeValue = 1, changeSearchTypeValue }) => {
  const { t } = useComplexLanguageMethod();
  if (!(searchTypeValue === 1 || searchTypeValue === 2)) {
    return null;
  }

  const chooseFirst = () => {
    if (searchTypeValue !== 1) {
      changeSearchTypeValue(1);
    }
  };

  const chooseSecond = () => {
    if (searchTypeValue !== 2) {
      changeSearchTypeValue(2);
    }
  };

  return (
    <>
      <input
        id='name-id'
        name='action'
        type='radio'
        value='name'
        checked={searchTypeValue === 1}
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
        checked={searchTypeValue === 2}
        onChange={chooseSecond}
      />
      <label for='type-id' onClick={chooseSecond}>
        {t('type')}
      </label>
      <div id='arrow'></div>
    </>
  );
};

export default SearchType;
