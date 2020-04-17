import React from 'react';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';
import { searchTypes } from '../../../pages/projects';

const SearchType = ({ searchTypeValue = searchTypes.title, changeSearchTypeValue }) => {
  const { t } = useComplexLanguageMethod();
  if (!(searchTypeValue === searchTypes.title || searchTypeValue === searchTypes.type)) {
    return null;
  }

  const chooseValue = (value) => {
    if (searchTypeValue !== value) {
      changeSearchTypeValue(value);
    }
  };

  const chooseFirst = () => chooseValue(searchTypes.title);
  const chooseSecond = () => chooseValue(searchTypes.type);

  return (
    <>
      <input
        id='name-id'
        name='action'
        type='radio'
        value='name'
        checked={searchTypeValue === searchTypes.title}
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
        checked={searchTypeValue === searchTypes.type}
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
