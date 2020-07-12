import React from 'react';
import Status from './components/storefront/index';
import Product from './components/products'
import Header from './components/header'
// import Votes from './components/vote-counter';
function App() {
  return (
    <>
      <Header />
      {/* <Votes /> */}
      <Status />
      <h1>Redux!</h1>
      <Product />
    </>
  );
}

export default App;