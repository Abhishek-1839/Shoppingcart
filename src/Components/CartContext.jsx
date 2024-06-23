import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (productId, quantity) => {
    setCart((prevCart) => ({ ...prevCart, [productId]: (prevCart[productId] || 0) + quantity }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = {...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };