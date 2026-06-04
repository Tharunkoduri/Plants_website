import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const storedCart = localStorage.getItem("cart");

    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product) => {

    setCart((prev) => {
      const existingItem = prev.find((item) => item.title === product.title);

      if (existingItem) {
        return prev.map((item) =>
          item.title === product.title
            ?
            {
              ...item,
              quantity: (item.quantity || 1) + 1
            } :
            item
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ];

    });
    alert(`${product.title} added to cart`)
  };

  const updateQuantity = (index, qty) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Number(qty);
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {

    const updatedCart = cart.filter((_, i) => i !== index);

    setCart(updatedCart);
  };

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  return (

    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}



