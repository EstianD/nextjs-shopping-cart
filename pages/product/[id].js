import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { ProductList } from "../../ProductList";
import { DataContext } from "../../store/GlobalState";
// import { Header } from "../../Components/Header/Nav";
import styles from "../../styles/Product.module.css";
import { AddToCartBtn } from "../../Components/Products/AddToCartBtn";

const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  const { state } = useContext(DataContext);

  //   const [product, setProduct] = useState();
  console.log("product: ", product);

  return (
    <div>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img
            className={styles.productImage}
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className={styles.productInfoContainer}>
          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.brandName}>{product.brand}</div>
          <div className="product-description">{product.description}</div>
          {/* <button className={styles.productAddBtn}>Add to cart</button> */}
          <AddToCartBtn state={state} product={product} />
        </div>
      </div>
    </div>
  );
};

Product.getInitialProps = async (ctx) => {
  const { query } = ctx;

  // Filter object
  const product = ProductList.filter(
    (product) => product.id === parseInt(query.id) //Url paramater returns as a string
  );
  return { product: product[0] };
};

// export function getStaticPaths() {
//   const products = ProductList;
//   console.log("PATHS: ", products);
//   const paths = products.map((product) => {
//     params: {
//       id: product.id;
//     }
//   });

//   return { paths, fallback: false };
// }

// export function getStaticProps({ params }) {
//   console.log(params);

// }

export default Product;
