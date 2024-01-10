import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const initialState = [];
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem("cart"));

    if (cartItemsData) {
      setCart(cartItemsData);
    }
  }, []);

  useEffect(() => {
    if (cart !== initialState) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevProducts) => {
      const exProduct = prevProducts.find((item) => item.id === product.id);
      if (exProduct) {
        return prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevProducts, { ...product, quantity }];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevProducts) =>
      prevProducts.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevProducts) =>
      prevProducts.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const deleteItem = (product) => {
    setCart((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

  const getTotalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
        clearCart,
        deleteItem,
        getTotalQuantity,
        getTotalPrice,
        setCart,
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
