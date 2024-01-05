import { useCart } from "./cartContext";
import UpdateItemQuantity from "./updateItemQuantity";

function Cart() {
  const { cart, deleteItem } = useCart();
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} />
            {item.title}
            {item.price}
            <UpdateItemQuantity />
            <button onClick={() => deleteItem(item)}>Remove Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
