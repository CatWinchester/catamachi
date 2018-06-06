import { combineReducers } from 'redux'
import { catImage, catNeeds, catWork } from './containers/GameView/GameView.reducers'
import * as fromCatGame from './containers/GameView/GameView.reducers'

const rootReducer = combineReducers({
  catImage,
  catNeeds,
  catWork
});

export default rootReducer

export const getCatNeeds = (state) =>{
  return fromCatGame.getCatNeeds(state.catNeeds.kitchen)
}

export const getSelectedRoom = (state) =>{
  return fromCatGame.getSelectedRoom(state.selectedRooms)
}
export const getClicksNumber = (state) =>{
  return fromCatGame.getClicksNumber(state.catWork.clickedTimes)
}
