import superagent from 'superagent';




const initialState = {
    categories: [
      // { name: 'electronics', displayName: 'Elecronics' },
      // { name: 'food', displayName: 'Food' },
      // { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      // { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      // { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      // { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
      // { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
      // { name: 'Apples', category: 'food', price: .99, inStock: 500 },
      // { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
      // { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: 'food',
  };


  // Reducers take in 2 inputs (state and action) the default for state will be the initState
  // its just a switch case statement
  export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log('action ---->',payload,type)
    switch (type) {
      case 'categories':
        return {...state,activeCategory : payload};
      case 'GETCATEGORY':
        state.categories = [...payload.results];
      return {
        ...state,
        categories:state.categories
      };
      case 'ADDSTOCK':
      case 'UPDATESTOCK':
        return {
          categories: state.categories,
          products: state.products,
          activeCategory: state.activeCategory,
          cartItem: state.cartItem
        };
      case 'GET':
        state.products = [...payload.results];
        return {
          ...state,
          products:state.products
        };
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
  
 
  export const getProducts = () => dispatch => {
    let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
    return superagent.get(api)
      .then(data => {
        dispatch(getActionProducts(data.body))
      });
  }

  export const getCategories = () => dispatch => {
    let api = 'https://rowaid-server.herokuapp.com/api/v1/categories';
    return superagent.get(api)
      .then(data => {
        dispatch(getActionCategory(data.body))
      });
  }

  export const putProduct = (id, data) => async dispatch => {
    let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
    let response = await superagent.put(`${api}/${id}`).send(data);
    dispatch(putAction(response))
  }

  export const deleteProduct = (id, data) => async dispatch => {
    let api = 'https://rowaid-server.herokuapp.com/api/v1/products';
    let response = await superagent.put(`${api}/${id}`).send(data);
    dispatch(deleteAction(response))
  }

  export const getActionCategory = payload => {
    return {
      type: 'GETCATEGORY',
      payload: payload
    }
  }

  export const deleteAction = payload => {
    return {
      type: 'ADDSTOCK',
      payload: payload
    }
  }
  
  
export const putAction = payload => {
  return {
    type: 'UPDATESTOCK',
    payload: payload
  }
}
export const getActionProducts = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}