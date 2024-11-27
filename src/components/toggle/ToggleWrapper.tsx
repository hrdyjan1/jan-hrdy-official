// Add this at the top of your file to mark it as a client component
'use client';

import { EmptyFunction } from '@/types/EmptyFunction';
import React from 'react';

interface Props {
  toggleName: string;
  onChange: EmptyFunction;
  checked: boolean;
}

function ToggleWrapper({
  toggleName,
  onChange,
  checked,
  children,
}: React.PropsWithChildren<Props>) {
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
}

export default ToggleWrapper;
