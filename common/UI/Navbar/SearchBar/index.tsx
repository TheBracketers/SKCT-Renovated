import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

function SearchBar({ onClick }) {
  const [searchText, setSearchText] = useState('');
  const onBlurHandler = () => {
    onClick();
    setTimeout(() => {
      setSearchText('');
    }, 1000);
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const faTimesClassNames = searchText === '' ? 'text-gray-400' : '';
  return (
    <div className="px-16 flex  items-center gap-6 justify-between w-screen h-full ">
      <input
        placeholder="Search..."
        type="text"
        onBlur={onBlurHandler}
        value={searchText}
        onChange={handleSearchChange}
        className="uppercase font-bold tracking-wide border-b-2flex justify-between w-full placeholder-gray-400 outline-none text-3xl border-black p-5 "
      />
      <div
        onClick={onClick}
        className={
          'text-3xl transition duration-300 transform ease-in-out hover:-rotate-180 ' +
          faTimesClassNames
        }>
        <FaTimes />
      </div>
    </div>
  );
}

export default SearchBar;
