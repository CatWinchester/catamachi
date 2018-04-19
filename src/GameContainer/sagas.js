import { put, takeEvery, all } from 'redux-saga/effects'

function* getCatImage() {
  console.log('sagaXat')
}

export default function* rootSaga() {
  yield takeEvery('GET_CAT_IMAGE', getCatImage)
}
