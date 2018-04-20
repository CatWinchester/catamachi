import {
  GET_CAT_IMAGE_SUCCESS,
  GET_CAT_IMAGE_FAILURE
} from './GameView.actions'

export function setCatImage (state = {
  catImage: ""
}, action) {
  switch(action.type){
    case GET_CAT_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        catImage: action.catImage
      })
    case GET_CAT_IMAGE_FAILURE:
      return Object.assign({}, state, {
        catImage: "",
        err: action.err
      })
    default:
      return state
  }
}
