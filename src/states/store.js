import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import fetchCandidateReducer from '../states/reducers/fetchCandidateReducer';
import createSagaMiddleware from 'redux-saga';
import appSaga from '../states/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ fetchCandidateReducer }),
    {},
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(appSaga);

export default store;
