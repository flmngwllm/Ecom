import { useCart } from "./cartContext";

function UpdateItemQuantities({
  productId,
  quantity,
  onQuantityChange,
  onDecrement,
}) {
  const { incrementQuantity, decrementQuantity } = useCart();

  const handleIncrement = () => {
    incrementQuantity(productId);
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    decrementQuantity(productId);
    onDecrement(Math.max(quantity - 1, 0));
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <span>{quantity}</span>
      {quantity > 0 && <button onClick={handleDecrement}>-</button>}
    </>
  );
}

export default UpdateItemQuantities;
