import {
  GET_CAT_IMAGE_SUCCESS,
  GET_CAT_IMAGE_FAILURE
} from './GameView.actions'
import catNames from 'cat-names'
const initialState = {
  catImage: "",
  catName: catNames.random(),
  catNeeds: {
    kitchen: {
      hunger: 50,
      avialableFood: [
        {
          name: 'tomato',
          amount: 4
        }, {
          name: 'bacon',
          amount: 1
        }, {
          name: 'chicken',
          amount: 2
        }
      ]
    },
    bedroom: {
      awakeness: 30
    }
  }
}

export function setCatImage (state = initialState, action) {
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
