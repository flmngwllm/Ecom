import UpdateItemQuantities from "./UpdateItemQuantities";
import { useCart } from "./cartContext";

function Cart() {
  const { cart, deleteItem, clearCart, incrementQuantity, decrementQuantity } =
    useCart();

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
              onQuantityChange={(newQuantity) =>
                incrementQuantity(item.id, newQuantity)
              }
              onDecrement={(newQuantity) =>
                decrementQuantity(item.id, newQuantity)
              }
            />

            <button onClick={() => deleteItem(item)}>Remove Product</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
