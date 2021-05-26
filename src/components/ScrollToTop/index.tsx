import React, { useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

const ScrollToTop = ({ history }) => {
  const { pathname } = history.location;
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <MdArrowUpward
      onClick={ scrollTop }
      visibility={ showScroll && pathname !== '/detail' ? 'flex' : 'hidden'  }
      className='scrollTop'
    />
  );
};

export default ScrollToTop;