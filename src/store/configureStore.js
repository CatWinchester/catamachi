import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../GameContainer/sagas'
import rootReducer from '../GameContainer/reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    ),
  )

  store.runSaga = sagaMiddleware.run(rootSaga)
  // store.close = () => store.dispatch(END)
  return store
}
