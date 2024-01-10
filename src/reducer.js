export function reducer(state, { type, payload }) {
  switch (type) {
		case 'SET_GOODS': {
			return {
				...state,
				goods: payload || [],
				loading: false
			}
		}

		case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );

			let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
				newOrder = [...state.order, newItem];
      } else {
        // Нельзя напрямую менять order вот так: "order.itemIndex.quantity++;", поскольку состояние order меняется только функцией setOrder,
        // поэтому нужно обойти весь массив
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          };
        });
      }

      return {
        ...state,
				order: newOrder,
				alertName: payload.name
      };
    }

		case 'REMOVE_FROM_CART': {
			return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload.id),
      };
		}  

		case 'INCREMENT_QUANTITY': {
			let newOrder = state.order.map((orderItem) => {
				if (orderItem.id === payload.id) {
					const newQuantity = orderItem.quantity + 1;
					return {
						...orderItem,
						quantity: newQuantity
					};
				} else {
					return orderItem;
				}
			});

			return {
				...state,
				order: newOrder
			};
		}

		case 'DECREMENT_QUANTITY': {
			let newOrder = state.order.map((orderItem) => {
				if (orderItem.id === payload.id) {
					const newQuantity = (orderItem.quantity - 1 > 0) ? orderItem.quantity - 1 : 0;
					return {
						...orderItem,
						quantity: newQuantity
					};
				} else {
					return orderItem;
				}
			});

			return {
				...state,
				order: newOrder
			};
		}

		case 'TOGGLE_CART': {
			return {
				...state,
				isCartShown: !state.isCartShown
			}
		}
		
		case 'CLOSE_ALERT': {
			return {
        ...state,
        alertName: '',
      };
		}

    default:
      return state;
  }
}
