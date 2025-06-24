import React, { useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Toast = () => {
  const { lastAddedItemName, showToast, setShowToast } = useContext(CartContext);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showToast, setShowToast]);

  if (!showToast || !lastAddedItemName) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 bg-[#32FFC4] text-[#0A0F2C] p-4 rounded-lg shadow-lg animate-toast-in-out">
      <p><span className="font-semibold">{lastAddedItemName}</span> ¡agregado al carrito!</p>
    </div>
  );
};

export default Toast;
