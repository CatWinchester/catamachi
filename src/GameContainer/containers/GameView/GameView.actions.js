export const GET_CAT_IMAGE = 'GET_CAT_IMAGE'
export const GET_CAT_IMAGE_SUCCESS = 'GET_CAT_IMAGE_SUCCESS'
export const GET_CAT_IMAGE_FAILURE = 'GET_CAT_IMAGE_FAILURE'
export const INCREASE_HUNGER = 'INCREASE_HUNGER'
export const SET_HUNGER = 'SET_HUNGER'

export function getCatImage() {
  console.log('actionGET_CAT_IMAGE')
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
  console.log('increaseHunger')
  return {
    type: INCREASE_HUNGER
  }
}
// export function setHunger(val) {
//   console.log('setHungersetHunger')
//   return {
//     type: SET_HUNGER,
//     hunger: val
//   }
// }
