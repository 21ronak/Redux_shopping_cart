import React, { Component } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from '../actions/index';

class ProductContainer extends Component{
  _renderProductList(){
    let prod= this.props.products.map(prod => (
      <div>
        <Product key={prod.productId} details={prod}
         addProduct={this.props.addToCart}
         removeProduct={this.props.removeFromCart}></Product>
      </div>
    ))
    return prod
  }
  render(){
    return(
      <React.Fragment>
        <h4>Products:</h4>
        {this._renderProductList()}
      </React.Fragment>
    )
  }
}
function mapStateToProps(state){
  return{
    products: state.products
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addToCart: addToCart, removeFromCart: removeFromCart}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);