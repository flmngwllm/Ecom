function ProductItem({ product }) {
  return (
    <div>
      <img src={product.image}></img>
      <li>{product.title}</li>
      <li>{product.price}</li>
    </div>
  );
}

export default ProductItem;
