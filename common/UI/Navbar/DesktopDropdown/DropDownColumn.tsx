import React from 'react';
import { FC } from 'react';

const DropDownColumn: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={
        'flex flex-col overflow-hidden min-w-min w-1/3 ' + className || ''
      }>
      {children}
    </div>
  );
};

export default DropDownColumn;
