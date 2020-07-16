const initialState = {
    cart: []
  };


  // Reducers take in 2 inputs (state and action) the default for state will be the initState
  // its just a switch case statement
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'ADD':
          console.log('add to cart---->',[...state.cart,payload])
        return { ...state,cart : [...state.cart,payload]};
      default:
        return state;
    }
  };
  
  // Actions
  // Actions are objects with type and payload
  export const add = (product) => {
      console.log('product ------>',product);
    return {
      type: 'ADD',
      payload: product,
    };
  };
  
