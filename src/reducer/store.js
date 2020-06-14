import {createStore,applyMiddleware} from 'redux';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store= createStore(rootReducer,applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);



export default store;
