import React from 'react';
import Status from './components/storefront/index';
import Product from './components/products'
import Header from './components/header'
import Cart from './components/cart'
// import Votes from './components/vote-counter';
function App() {
  return (
    <>
      <Header />
      
      {/* <Votes /> */}
      <Status />
      <Cart />
      <h1>Redux!</h1>
      <Product />
    </>
  );
}

export default App;