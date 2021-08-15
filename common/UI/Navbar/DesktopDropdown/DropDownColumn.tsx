import React from 'react';
import { FC } from 'react';

const DropDownColumn: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={
        'my-6 px-6 w-1/3 overflow-hidden transition duration-300 ' +
          className || ''
      }>
      {children}
    </div>
  );
};

export default DropDownColumn;
