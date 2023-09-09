import React, { useState, useEffect } from 'react';
import './scrollToTopButton.css';
import {BiUpArrowAlt} from 'react-icons/bi'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on the user's scroll position
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 100); // Show the button when the user scrolls beyond 300 pixels
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null; // Hide the button if not visible
  }

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <BiUpArrowAlt/>
    </button>
  );
};

export default ScrollToTopButton;