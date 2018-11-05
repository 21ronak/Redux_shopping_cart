import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCart } from '../actions/index';
import { bindActionCreators } from 'redux';

class CartContainer extends Component{
     
  _renderCartProducts() {
    const prod = this.props.products.filter(product => ( product.prodQuantity > 0));
    const hasProducts = prod.length > 0
    const nodes = hasProducts ? (
      prod.map(product =>
        <li key={product.productId}> 
          {product.productName} - ${product.price} x {product.prodQuantity}</li>
      )
    ) : ( <em>Please add some products to cart.</em> )
    return nodes;
  }

  _getCartTotal(){
    let total = 0;
    const prod = this.props.products.filter(product => ( product.prodQuantity > 0));
    prod.map(product => (total = total + (product.prodQuantity * product.price)));
    return total;
  }

  _resetCart(){
    const prod = this.props.products.filter(product => ( product.prodQuantity > 0));
    const hasProducts = prod.length > 0
    return (hasProducts)? ( <button onClick={() => this.props.resetCart()}> Checkout </button>) : null;
  }

  render(){
    return (
      <React.Fragment>
        <h4>Your Cart:</h4>
        <ul>
          {this._renderCartProducts()}
        </ul>
        <div> Total Amount: 
          ${this._getCartTotal()}
        </div>
        <div> 
          {this._resetCart()}
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    products: state.products
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ resetCart: resetCart}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);