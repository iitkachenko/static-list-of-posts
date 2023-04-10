import React, { useState } from 'react';

export const ToTopBtn = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true);
      } 
      else if (scrolled <= 300){
        setVisible(false);
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            className="flex justify-center items-center border-2 border-brand-600 shadow-[0_0_10px_#7D62BB] bg-brand-100 w-10 h-10 rounded-full fixed bottom-8 right-[10%] opacity-50 hover:opacity-100 text-bold text-3xl"
            style={{display: visible ? 'inline' : 'none'}}
            onClick={scrollToTop}
        >
            <span className="relative top-[3px]">^</span>
        </button>
    )
}