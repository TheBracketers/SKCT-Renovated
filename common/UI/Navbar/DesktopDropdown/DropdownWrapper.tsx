import React from 'react';
import { FC } from 'react';

const DropdownWrapper: FC = ({ children }) => {
  return <div className="flex flex-wrap -mx-6 overflow-hidden">{children}</div>;
};

export default DropdownWrapper;
