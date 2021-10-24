import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/ProductList.scss";

const ProductList = () => {
  const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=1";
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product,index) => (
          <ProductItem
            key={product.id}
            id={product.id}
            idItemInCart={`cartItem-${product.id + index}`}
            title={product.title}
            price={product.price}
						image={product.images[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
