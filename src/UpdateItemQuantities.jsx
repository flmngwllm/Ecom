function UpdateItemQuantities({ quantity, onIncrement, onDecrement }) {
  const handleIncrement = () => {
    console.log("Incrementing quantity");
    onIncrement();
  };

  const handleDecrement = () => {
    console.log("Decrementing quantity");
    onDecrement();
  };

  return (
    <>
      {quantity > 0 && <button onClick={handleDecrement}>-</button>}
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default UpdateItemQuantities;
