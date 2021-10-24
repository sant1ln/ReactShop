import React from 'react';
import '../styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png';
import AppContext from '../context/AppContext';

const OrderItem = ({id,idItemInCart,title,price,image}) => {
	const {removeFromCart} = React.useContext(AppContext)

	const handleRemove = product => {
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={image} />
			</figure>
			<p>{title}</p>
			<p>{price}0</p>
			<img src={closeIcon} alt="close"  onClick={()=>handleRemove(idItemInCart)} />
		</div>
	);
}

export default OrderItem;