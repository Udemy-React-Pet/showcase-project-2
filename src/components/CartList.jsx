import React, { useContext } from 'react';

import { ShowcaseContext } from '../context';

import CartItem from './CartItem';

function CartList() {
  const { order, handleCartShown = Function.prototype } =
    useContext(ShowcaseContext);

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
          return <CartItem key={item.id} {...item} />;
        })
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active green darken-1'>
        Общая стоимость: ₵{totalPrice}
        <button className='secondary-content btn deep-orange darken-2 cart-button'>
          Оформить заказ
        </button>
      </li>
      {/* <li className='collection-item green darken-1'>
				<button className='btn deep-orange darken-2'>Оформить заказ</button>
      </li> */}
    </ul>
  );
}

export default CartList;
