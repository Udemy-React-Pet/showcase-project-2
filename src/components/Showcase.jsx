import React from 'react';
import { useState, useEffect } from 'react';

import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

function Showcase() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShown, setCartShown] = useState(false);
	const [alertName, setAlertName] = useState('');

  const addToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      // Нельзя напрямую менять order вот так: "order.itemIndex.quantity++;", поскольку состояние order меняется только функцией setOrder,
      // поэтому нужно обойти весь массив
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
		setAlertName(item.name);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== itemId);
    setOrder(newOrder);
  };

	const decQuantity = (id) => {
		let newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        const newQuantity = (orderItem.quantity - 1 > 0) ? orderItem.quantity - 1 : 0;
        return {
          ...orderItem,
          quantity: newQuantity
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
	}

	const incQuantity = (id) => {
		let newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
				const newQuantity = orderItem.quantity + 1;
        return {
          ...orderItem,
          quantity: newQuantity
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
	}

  const filterUnique = (arr) => {
    const uniqueArr = [];

    filterNext: for (let item of arr) {
      for (let elem of uniqueArr) {
        if (elem.id === item.id) continue filterNext;
      }
      uniqueArr.push(item);
    }

    return uniqueArr;
  };

  const handleCartShown = () => {
    setCartShown(!isCartShown);
  };

	const closeAlert = () => {
		setAlertName('');
	}

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(filterUnique(data.featured));
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleCartShown={handleCartShown} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShown && (
        <CartList
          order={order}
          handleCartShown={handleCartShown}
          removeFromCart={removeFromCart}
					decQuantity={decQuantity}
          incQuantity={incQuantity}
        />
      )}
			{
				alertName && <Alert name={alertName} closeAlert={closeAlert} />
			}
    </main>
  );
}

export default Showcase;
