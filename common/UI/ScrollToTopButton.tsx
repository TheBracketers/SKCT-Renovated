import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className='fixed z-50 text-white text-2xl rounded-full p-3 opacity-10 hover:opacity-100 transition duration-300  bg-black  bottom-5 right-5'>
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
