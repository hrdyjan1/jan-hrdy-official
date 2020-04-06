import React from 'react';
import ToggleLanguage from '../toggle/ToggleLanguage';
import ToggleTheme from '../toggle/ToggleTheme';
import ToggleSound from '../toggle/ToggleSound';

const ModalSettings = () => {
  return (
    <ul className='menu_items'>
      <li>
        <ToggleLanguage />
      </li>
      <li>
        <ToggleTheme />
      </li>
      <li>
        <ToggleSound />
      </li>
    </ul>
  );
};

export default ModalSettings;
