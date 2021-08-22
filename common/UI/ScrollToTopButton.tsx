import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import CSSTransition from 'react-transition-group/CSSTransition';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      console.log(window.pageYOffset);

      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <CSSTransition
        in={showButton}
        mountOnEnter
        unmountOnExit
        timeout={600}
        classNames='fade-in-out'>
        <button
          onClick={scrollToTop}
          className='fixed z-50 text-white text-2xl rounded-full p-3 opacity-10 hover:opacity-100 transition duration-300  bg-black  bottom-5 right-5'>
          <FaArrowUp />
        </button>
      </CSSTransition>
    </div>
  );
}

export default ScrollToTopButton;
