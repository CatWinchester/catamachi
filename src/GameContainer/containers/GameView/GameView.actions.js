export const GET_CAT_IMAGE = 'GET_CAT_IMAGE'
export const GET_CAT_IMAGE_SUCCESS = 'GET_CAT_IMAGE_SUCCESS'
export const GET_CAT_IMAGE_FAILURE = 'GET_CAT_IMAGE_FAILURE'

export function getCatImage() {
  return {
    type: GET_CAT_IMAGE
  }
}

export function getCatImageSuccess(image) {
  console.log('action  getCatImageSuccess')
  return {
    type: GET_CAT_IMAGE_SUCCESS,
    catImage: image
  }
}
