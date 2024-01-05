import { useCart } from "./cartContext";

function UpdateItemQuantity() {
  const { incrementQuantity, decrementQuantity, quantity, setQuantity } =
    useCart();
  return (
    <>
      <button onClick={incrementQuantity}>+</button>
      <span>{quantity}</span>
      <button onClick={decrementQuantity}>-</button>
    </>
  );
}

export default UpdateItemQuantity;
