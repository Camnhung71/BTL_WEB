import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {
    productListReducer,
    productDetailsReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';
import {searchKeywordReducer} from './reducers/searchReducers'

import thunk from 'redux-thunk';
import { userSigninReducer } from './reducers/userReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [], 
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    keywordSearch: searchKeywordReducer,
    userSignin: userSigninReducer,
});


const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;