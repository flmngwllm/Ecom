import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart((prevProducts) => {
      console.log("Previous cart:", prevProducts);
      return [...prevProducts, product];
    });
  };

  const incrementQuantity = (product) => {
    setQuantity((prevProducts) => prevProducts.find());
  };

  const decrementQuantity = (product) => {
    setQuantity((q) => q - 1);
  };

  const deleteItem = (product) => {
    setCart((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        incrementQuantity,
        decrementQuantity,
        quantity,
        setQuantity,
        clearCart,
        deleteItem,
      }}
    >
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
