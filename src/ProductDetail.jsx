import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./cartContext";
import UpdateItemQuantities from "./UpdateItemQuantities";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const { handleAddToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProductDetails() {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      // Update state or display the product details as needed
      setProduct(data);
    }

    fetchProductDetails();
  }, [productId]);

  if (!product) <div>Loading...</div>;

  const handleAddToCartWithQuantity = () => {
    handleAddToCart(product, quantity);
  };

  return (
    <div>
      <img src={product.image} />
      {product.title}
      {product.price}
      {product.description}
      {product.category}
      <UpdateItemQuantities
        productId={product.id}
        quantity={quantity}
        onIncrement={() => setQuantity(quantity + 1)}
        onDecrement={() => setQuantity(Math.max(quantity - 1, 0))}
      />
      <button onClick={handleAddToCartWithQuantity}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
