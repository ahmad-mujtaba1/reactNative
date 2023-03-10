import React from 'react';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  STORE_PRODUCT_TO_STORE,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART,
} from '../constants/index';
export function addProductsToStore(products) {
  return {
    type: STORE_PRODUCT_TO_STORE,
    payload: products,
  };
}

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
