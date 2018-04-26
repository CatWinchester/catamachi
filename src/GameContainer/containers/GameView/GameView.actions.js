export const GET_CAT_IMAGE = 'GET_CAT_IMAGE'
export const GET_CAT_IMAGE_SUCCESS = 'GET_CAT_IMAGE_SUCCESS'
export const GET_CAT_IMAGE_FAILURE = 'GET_CAT_IMAGE_FAILURE'
export const INCREASE_HUNGER = 'INCREASE_HUNGER'
export const SET_HUNGER = 'SET_HUNGER'

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
