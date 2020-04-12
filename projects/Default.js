import React from 'react';

export const Suggestions = React.memo(({ suggestions = [] }) => {
  if (!Array.isArray(suggestions)) {
    <p>Not an array of suggestions</p>;
  } else if (suggestions.length > 0) {
    return (
      <div className='awesome-results'>
        <ul className='collection'>
          {suggestions.map((suggestion) => (
            <li className='collection-item'>{suggestion}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <p>Empty array</p>;
  }
});

const Default = () => {
  const suggestions = [];
  return (
    <div className='container'>
      <h1 className='center grey-text'>Omnibar</h1>
      <p className='center grey-text'>A multi-functional, cross domain search concept. </p>
      <div className='awesome-container white z-depth-1'>
        <div className='input-field'>
          <input id='awesome-input' type='text' className='' />
          <label for='awesome-input'>Workflow search</label>
        </div>
        <div className='awesome-menu'>
          <ul className='right'>
            <li>
              <a href='#!' className='grey-text'>
                <i className='material-icons small waves-effect search-icon'>search</i>
                <i className='material-icons small waves-effect dropdown'>more_vert</i>
              </a>
            </li>
          </ul>
          <ul id='menu' className='dropdown-content grey-text'>
            <li>
              <a href='#!' className='workspace trigger-close'>
                Workspace search
              </a>
            </li>
            <li>
              <a href='#!' className='accounts trigger-close'>
                Accounts search
              </a>
            </li>
            <li className='divider'></li>
            <li>
              <a href='#!' className='status trigger-close'>
                Show state & status
              </a>
            </li>
          </ul>
        </div>
        <Suggestions suggestions={suggestions} />
      </div>
    </div>
  );
};

export default Default;
