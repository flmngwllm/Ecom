import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="cart">Cart</Link>
      <Link to="shop">Shop</Link>
    </div>
  );
}

export default Nav;
