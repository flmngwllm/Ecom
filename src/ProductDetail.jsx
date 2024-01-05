import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

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

  return (
    <div>
      <img src={product.image} />
      {product.title}
      {product.price}
      {product.description}
      {product.category}
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
