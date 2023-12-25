import React from 'react';

import CartItem from './CartItem';

function CartList(props) {
  const {
    order = [],
    handleCartShown = Function.prototype,
    removeFromCart = Function.prototype,
    decQuantity = Function.prototype,
		incQuantity = Function.prototype
  } = props;

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity;
  }, 0);

  return (
    <ul className='collection cart-list'>
      <li className='collection-item active green darken-1'>
        Корзина
        <i className='material-icons right pointer' onClick={handleCartShown}>
          cancel
        </i>
      </li>
      {order.length ? (
        order.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              removeFromCart={removeFromCart}
              decQuantity={decQuantity}
							incQuantity={incQuantity}
            />
          );
        })
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active green darken-1'>
        Общая стоимость: ₵{totalPrice}
				<button className='secondary-content btn deep-orange darken-2 cart-button'>Оформить заказ</button>
			</li>
			{/* <li className='collection-item green darken-1'>
				<button className='btn deep-orange darken-2'>Оформить заказ</button>
      </li> */}
    </ul>
  );
}

export default CartList;
