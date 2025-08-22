'use client';

import { useEffect, useState } from 'react';

export const UpButton = () => {
  const [visible, setVisible] = useState(false);

  // Mostrar el botón cuando se hace scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-30"
        aria-label="Volver arriba"
      >
        ↑
      </button>
    )
  );
}



