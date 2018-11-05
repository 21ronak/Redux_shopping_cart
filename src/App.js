import React, { Component } from 'react';
import './App.css';
import CartContainer from './containers/cart';
import ProductContainer from './containers/product';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> Welcome to Reactux Shopping Cart</h1>
        <ProductContainer></ProductContainer>
        <CartContainer></CartContainer>
      </React.Fragment>
    );
  }
}

export default App;
