import { useCart } from "./cartContext";

function Cart() {
  const { cart } = useCart();
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} />
            {item.title}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
