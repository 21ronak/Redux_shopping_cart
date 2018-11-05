const initialState = {
  products: [
  { 'productId': 1,
    'productName': 'Manchester United Jersey',
    'prodQuantity': 0,
    'price': 500},
  { 'productId': 2,
    'productName': 'Golden State Warriors Jersey',
    'prodQuantity': 0,
    'price': 100},
  { 'productId': 3,
    'productName': 'Manchester City Jersey',
    'prodQuantity': 0,
    'price': 10}
]}
export default ( state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      let newState = state.products.map(prod => {
        if(prod.productId === action.payload.productId){
          prod.prodQuantity++;
        }
        return prod;
      });
      return {...state, products: newState};
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, { products: state.products.map(prod => {
        if(prod.productId === action.payload.productId && action.payload.prodQuantity > 0){
          prod.prodQuantity--;
        }
        return prod;
      }) });
    case 'RESET_CART':
      let resetState = state.products.map(prod => {
        prod.prodQuantity = 0;
        return prod;
      });
      return { ...state, products: resetState};
    default: 
      return state;
  }
}
