import React from "react";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({id,title,price,image}) => {
    const {addToCart} = React.useContext(AppContext)

	const handleCart = (product) =>{
    let idItemInCart =  Math.floor(Math.random() * (500000 - 1000)) 
		addToCart({...product,idItemInCart})
	}

  return (
    <div className="ProductItem">
      <img
        src={image}
        alt={title}
      />
      <div className="product-info">
        <div>
          <p>{price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleCart({id,title,price,image})}>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
