import React from "react";
import "../styles/ProductItem.scss";
import addCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({title,price,image}) => {
  const [cart, setCart] = React.useState([]);

	const handleCart = () =>{
			setCart([])
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
        <figure onClick={handleCart}>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
