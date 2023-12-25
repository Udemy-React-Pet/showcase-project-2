import React from 'react';

function Cart(props) {
	const {quantity = 0, handleCartShown = Function.prototype} = props;

	return (
		<div 
			className='cart deep-orange darken-2 white-text'
			onClick={handleCartShown}
		>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	);
}

export default Cart;
