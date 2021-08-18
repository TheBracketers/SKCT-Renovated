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

  const onBlurHandler = () => {
    onBlur();
    setTimeout(() => {
      setSearchText('');
    }, 400);
  };

  const faTimesClassNames = searchText === '' ? 'text-gray-400' : '';

  return (
    <div className='px-2 ipad-pro:px-14 flex mb-2 items-center gap-6 justify-between w-screen h-full  '>
      <input
        ref={ref}
        placeholder='Search...'
        type='text'
        onBlur={onBlurHandler}
        value={searchText}
        onChange={handleSearchChange}
        className='uppercase font-semibold ipad-pro:font-bold ipad-pro:tracking-wide flex justify-between w-full placeholder-gray-400 outline-none text-xl ipad-pro:text-3xl p-5 '
      />
      <div
        onClick={onClose}
        className={
          'text-xl mr-6 ipad:pro:text-3xl transition duration-300 transform ease-in-out  hover:-rotate-90 ' +
          faTimesClassNames
        }>
        <FaTimes />
      </div>
    </div>
  );
});

export default SearchBar;
