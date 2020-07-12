import React from 'react';




const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
      { name: 'Apples', category: 'food', price: .99, inStock: 500 },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: 'food',
  };


  // Reducers take in 2 inputs (state and action) the default for state will be the initState
  // its just a switch case statement
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'categories':
        return {...state,activeCategory : payload};
      default:
        return state;
    }
  };
  
  // Actions
  // Actions are objects with type and payload
  export const select = (name) => {
    return {
      type: 'categories',
      payload: name,
    };
  };
  
