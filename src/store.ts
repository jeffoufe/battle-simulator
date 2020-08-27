import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { gameReducer } from './reducers';
import { createLogger } from 'redux-logger'
import { watchEndTurn } from './reducers/game/sagas';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({});

const store = createStore(
  gameReducer,
  applyMiddleware(sagaMiddleware, logger)
);

function* rootSaga() {
  yield all([
    watchEndTurn()
  ])
}

sagaMiddleware.run(rootSaga);

export default store;