import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart((prevProducts) => {
      console.log("Previous cart:", prevProducts);
      return [...prevProducts, product];
    });
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}{" "}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of the cart provider");
  return context;
}

export { useCart, CartProvider };
