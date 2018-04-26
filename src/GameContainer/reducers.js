import { combineReducers } from 'redux'
import { catImage, catNeeds } from './containers/GameView/GameView.reducers'
import * as fromCatGame from './containers/GameView/GameView.reducers'

const rootReducer = combineReducers({
  catImage,
  catNeeds
});

export default rootReducer

export const getCatNeeds = (state) =>{
  return fromCatGame.getCatNeeds(state.catNeeds.kitchen)
}
