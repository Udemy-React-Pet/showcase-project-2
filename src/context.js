import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShowcaseContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShown: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
	// В value с помощью useReducer складываются поля (те, что были стейтами ранее). 
	// Далее добавим методы которые будем передавать в контексте
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  value.addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
  };

	value.handleCartShown = () => {
		dispatch({ type: 'TOGGLE_CART' });
	}

	value.setGoods = (data) => {
		dispatch({ type: 'SET_GOODS', payload: data });
	}

  return <ShowcaseContext.Provider value={value}>{children}</ShowcaseContext.Provider>;
};
