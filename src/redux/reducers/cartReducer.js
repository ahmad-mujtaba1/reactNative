import {ADD_QUANTITY, EMPTY_CART, STORE_PRODUCT_TO_STORE} from '../constants';
import {ADD_TO_CART, SUB_QUANTITY, REMOVE_FROM_CART} from '../constants/index';
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PRODUCT_TO_STORE:
      return {
        ...state,
        cartItems: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.id === action.id ? {...product, selected: true} : product,
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.id === action.id
            ? {...product, selected: false, quantity: 1}
            : product,
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity + 1,
                totalPrice: product.price + product.totalPrice,
              }
            : product,
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                totalPrice:
                  product.quantity !== 1
                    ? product.totalPrice - product.price
                    : product.price,
              }
            : product,
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.selected
            ? {...product, selected: false, quantity: 1}
            : product,
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
