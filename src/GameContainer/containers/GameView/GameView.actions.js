export const GET_CAT_IMAGE = 'GET_CAT_IMAGE'
export const GET_CAT_IMAGE_SUCCESS = 'GET_CAT_IMAGE_SUCCESS'
export const GET_CAT_IMAGE_FAILURE = 'GET_CAT_IMAGE_FAILURE'
export const INCREASE_HUNGER = 'INCREASE_HUNGER'
export const DECREASE_HUNGER = 'DECREASE_HUNGER'
export const SET_HUNGER = 'SET_HUNGER'
export const SET_FOOD = 'SET_FOOD'
export const SELECT_ROOM = 'SELECT_ROOM'
export const SET_CLICKER = 'SET_CLICKER'
export const INCREASE_CLICKER = 'INCREASE_CLICKER'
export const RESET_CLICKER = 'RESET_CLICKER'


export function getCatImage() {
  return {
    type: GET_CAT_IMAGE
  }
}

export function getCatImageSuccess(image) {
  return {
    type: GET_CAT_IMAGE_SUCCESS,
    catImage: image
  }
}

export function increaseHunger() {
  return {
    type: INCREASE_HUNGER
  }
}

export function decreaseHunger(foodName) {
  return {
    type: DECREASE_HUNGER,
    name: foodName
  }
}
export function selectRoom(name) {
  return {
    type: SELECT_ROOM,
    name: name
  }
}

export function increaseClicker() {
  return {
    type: INCREASE_CLICKER
  }
}

export function resetClicker() {
  return {
    type: RESET_CLICKER
  }
}
