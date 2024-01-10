import UpdateItemQuantities from "./UpdateItemQuantities";
import { useCart } from "./cartContext";

function Cart() {
  const {
    cart,
    deleteItem,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    getTotalQuantity,
    getTotalPrice,
  } = useCart();

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} />
            {item.title}
            {item.price}
            <UpdateItemQuantities
              productId={item.id}
              quantity={item.quantity}
              onIncrement={() => incrementQuantity(item.id)}
              onDecrement={() => decrementQuantity(item.id)}
            />

            {parseFloat((item.totalPrice = item.price * item.quantity)).toFixed(
              2
            )}

            <button onClick={() => deleteItem(item)}>Remove Product</button>
          </li>
        ))}
      </ul>

      {getTotalQuantity > 0 ? (
        <button onClick={clearCart}>Clear Cart</button>
      ) : (
        "Your cart is empty"
      )}

      {getTotalQuantity}

      {getTotalPrice > 0 && parseFloat(getTotalPrice).toFixed(2)}
    </div>
  );
}

export default Cart;
