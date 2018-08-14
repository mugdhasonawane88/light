import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import fetchCandidateReducer from '../states/reducers/fetchCandidateReducer';
import thunk from 'redux-thunk';
const store = createStore(
    combineReducers({ fetchCandidateReducer }),
    {},
    applyMiddleware(logger,thunk)
);

export default store;
