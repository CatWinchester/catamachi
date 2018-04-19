import {
  GET_CAT_IMAGE,
  GET_CAT_IMAGE_SUCCESS,
  GET_CAT_IMAGE_FAILURE
} from './GameView.actions'

export function catImage (state = {
  catImage: ""
}, action) {
  switch(action.type){
    case GET_CAT_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        catImage: action.catImage
      })
    default:
      return state
  }
}
