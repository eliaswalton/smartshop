import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [lastAddedItemName, setLastAddedItemName] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Recalculate total price whenever cartItems changes
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cartItems]);

  const addItemToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setLastAddedItemName(product.name);
    setShowToast(true);
  }, []);

  const removeItemFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateItemQuantity = (productId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      totalPrice,
      addItemToCart,
      removeItemFromCart,
      updateItemQuantity,
      lastAddedItemName,
      showToast,
      setShowToast
    }}>
      {children}
    </CartContext.Provider>
  );
};
