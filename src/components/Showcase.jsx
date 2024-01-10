import React from 'react';
import { useEffect, useContext } from 'react';

import { API_KEY, API_URL } from '../config';

import { ShowcaseContext } from '../context';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

function Showcase() {
  const { loading, order, isCartShown, alertName, setGoods } =
    useContext(ShowcaseContext);

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

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(filterUnique(data.featured));
      });
			// eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isCartShown && <CartList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Showcase;
