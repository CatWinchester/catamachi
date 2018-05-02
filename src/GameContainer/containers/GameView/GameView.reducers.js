import {
  GET_CAT_IMAGE_SUCCESS,
  GET_CAT_IMAGE_FAILURE,
  SELECT_ROOM,
  SET_HUNGER,
  SET_FOOD
} from './GameView.actions'

import catNames from 'cat-names'

const initialState = {
  catImage: "",
  catName: catNames.random(),
  selectedRoom:'bedroom',
  catNeeds: {
    kitchen: {
      hunger: 60,
      avialableFood: {
        tomato: 4,
        bacon: 1,
        chicken: 2
      }
    },
    bedroom: {
      awakeness: 30
    }
  }
}

export function catImage(state = initialState, action) {
  switch (action.type) {
    case GET_CAT_IMAGE_SUCCESS:
      return {
        ...state,
        catImage: action.catImage
      }
    case GET_CAT_IMAGE_FAILURE:
      return {
        ...state,
        catImage: "",
        err: action.err
      }
    case SELECT_ROOM:
      return {
        ...state,
        selectedRoom: action.name
      }
    default:
      return state
  }
}

export function catNeeds(state = initialState.catNeeds, action) {
  switch (action.type) {
    case SET_HUNGER:{
      return {
        ...state,
        kitchen: {
          hunger: action.hunger,
          avialableFood:state.kitchen.avialableFood
        }
      }
    }
      case SET_FOOD:{
        return {
          ...state,
          kitchen: {
            hunger: state.kitchen.hunger,
            avialableFood:action.food
          }
        }
      }
    default:
      return state
  }
}

export const getSelectedRoom = (state) => state
export const getCatNeeds = (state) => state
