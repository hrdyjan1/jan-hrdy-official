import React from 'react';

const ToggleWrapper = ({ toggleName, onChange, checked, children }) => {
  const toggleId = `toggle${toggleName}Id`;
  const toggleLabelClassName = `toggle${toggleName}Label`;
  const toggleInputClassName = `toggle${toggleName}Input`;
  const toggleWrapperClassName = `toggle${toggleName}Wrapper`;

  return (
    <div className={toggleWrapperClassName}>
      <input
        type='checkbox'
        id={toggleId}
        className={toggleInputClassName}
        onChange={onChange}
        checked={checked}
      />
      <label className={toggleLabelClassName} htmlFor={toggleId}>
        <div>{children}</div>
      </label>
    </div>
  );
};

export default ToggleWrapper;
