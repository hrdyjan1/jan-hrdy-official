import React from 'react';
import ToggleLanguage from '../toggle/ToggleLanguage';
import ToggleTheme from '../toggle/ToggleTheme';

const ModalSettings = () => {
  return (
    <ul className='menu_items'>
      <li>
        <ToggleLanguage />
      </li>
      <li>
        <ToggleTheme />
      </li>
    </ul>
  );
};

export default ModalSettings;
