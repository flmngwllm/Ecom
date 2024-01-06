import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useCart } from "./cartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { handleAddToCart } = useCart();

  useEffect(function () {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="">
        <div className="flex flex-wrap mx-auto">
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              AddToCart={() => handleAddToCart(product)}
            ></ProductItem>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
