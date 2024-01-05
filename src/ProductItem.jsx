import { Link } from "react-router-dom";

function ProductItem({ product, AddToCart }) {
  return (
    <>
      <div className="flex items-center max-w-[300px]">
        <img src={product.image}></img>
      </div>
      <div>
        <Link to={`/shop/${product.id}`}>
          {" "}
          <li>{product.title}</li>{" "}
        </Link>
        <li>{product.price}</li>
        <button onClick={AddToCart}>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductItem;
