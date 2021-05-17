import React, { useState } from "react";
// Import array of products from external file
import { ProductList } from "../../ProductList";
import { Product } from "./Product";
import styles from "../../styles/Products.module.css";

function Products() {
  const [products, setProducts] = useState(ProductList);
  console.log("ProductList", ProductList);

  const renderProducts = () => {
    return products.map((product, i) => {
      return <Product key={i} product={product} />;
    });
  };

  return (
    <div>
      <h4>Products page</h4>
      <div className={styles.container}>{renderProducts()}</div>
    </div>
  );
}

export default Products;
