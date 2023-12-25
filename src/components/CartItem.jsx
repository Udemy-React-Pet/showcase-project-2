import React from 'react';

function CartItem(props) {
	const { 
		id, 
		name, 
		price, 
		quantity, 
		removeFromCart = Function.prototype,
		decQuantity = Function.prototype,
		incQuantity = Function.prototype
	 } = props;

	return (
		<li className='collection-item'>
			{name}
			<span className='cart-item-icon'>
				<i className='material-icons deep-orange-text text-darken-2 pointer' onClick={() => decQuantity(id)}>remove</i>
			</span>
			<span>×{quantity}</span> 
			<span className='cart-item-icon'>
				<i className='material-icons deep-orange-text text-darken-2 pointer' onClick={() => incQuantity(id)}>add</i>
			</span>
			→ {price} ⨯ {quantity} = ₵{quantity * price}
			<span className='secondary-content cart-item-icon'>
				<i className='material-icons deep-orange-text text-darken-2 pointer' onClick={() => removeFromCart(id)}>close</i>
			</span>
		</li>
	);
}

export default CartItem;
