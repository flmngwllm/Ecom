import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id}></ProductItem>
      ))}
    </div>
  );
}

export default Products;
