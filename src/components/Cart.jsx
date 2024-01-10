import React from 'react';

import { useContext } from 'react';

import { ShowcaseContext } from '../context';

function Cart() {
	const { order, handleCartShown = Function.prototype} = useContext(ShowcaseContext);

	const quantity = order.length;

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
