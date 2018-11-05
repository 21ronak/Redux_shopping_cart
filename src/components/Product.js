import React from 'react';

const Product = props => {
  const { productId, productName, prodQuantity, price} = props.details;
  function _removeButton(){
    return (prodQuantity > 0) ? (
      <button onClick={() => props.removeProduct(props.details)}> 
      Remove from cart </button>) : null;
  }
  return(
    <React.Fragment>
      <span> {productId}.</span>
      <span> {productName} </span>
      <span> Quantity: {prodQuantity}</span>
      <span> Price: ${price}</span>
      <button onClick={() => props.addProduct(props.details)}> 
      Add to cart </button>
      {_removeButton()}
    </React.Fragment>
  )
}

export default Product;