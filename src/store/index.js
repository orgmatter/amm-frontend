import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { rootReducers } from './reducers';
import { thunk } from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer: rootReducers}, initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;