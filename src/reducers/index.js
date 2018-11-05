import { combineReducers } from 'redux';
import prodReducer from './products';

const RootReducer = combineReducers({
  //cart: cartReducer,
  products: prodReducer
})

export default RootReducer;
// We can use combineReducer if we add more Reducers