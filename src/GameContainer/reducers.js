import { combineReducers } from 'redux'
import { initializeCat, setCatImage } from './containers/GameView/GameView.reducers'

const rootReducer = combineReducers({
  setCatImage
});

export default rootReducer
