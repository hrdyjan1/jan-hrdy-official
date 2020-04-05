import React from 'react';

const ToggleWrapper = ({ toggleName, children }) => {
  const toggleId = `toggle${toggleName}Id`;
  const toggleLabelClassName = `toggle${toggleName}Label`;
  const toggleInputClassName = `toggle${toggleName}Input`;
  const toggleWrapperClassName = `toggle${toggleName}Wrapper`;

  return (
    <div className={toggleWrapperClassName}>
      <input type='checkbox' id={toggleId} className={toggleInputClassName} />
      <label className={toggleLabelClassName} for={toggleId} />
      {children}
    </div>
  );
};

export default ToggleWrapper;
