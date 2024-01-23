import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})
const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
});

export default store;