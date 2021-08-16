import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

const SearchBar = React.forwardRef<
  HTMLInputElement,
  { onClose: () => void; onBlur: () => void }
>(({ onClose, onBlur }, ref) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const faTimesClassNames = searchText === '' ? 'text-gray-400' : '';
  return (
    <div className=" px-2 ipad-pro:px-14 flex mb-2  items-center gap-6 justify-between w-screen h-full ">
      <input
        ref={ref}
        placeholder="Search..."
        type="text"
        onBlur={onBlur}
        value={searchText}
        onChange={handleSearchChange}
        className="uppercase font-semibold ipad-pro:font-bold ipad-pro:tracking-wide border-b-2flex justify-between w-full placeholder-gray-400 outline-none text-xl ipad-pro:text-3xl border-black p-5 "
      />
      <div
        onClick={onClose}
        className={
          'text-xl mr-2 ipad:pro:text-3xl transition duration-300 transform ease-in-out hover:-rotate-90 ' +
          faTimesClassNames
        }>
        <FaTimes />
      </div>
    </div>
  );
});

export default SearchBar;
