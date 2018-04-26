import { call, put, takeEvery, select } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
import convert from 'xml-js';
import { getCatNeeds } from './reducers'

function getCatImageApi () {
  return fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
}

function* increaseHunger() {
  const kn = yield select(getCatNeeds)
  yield put({ type: 'SET_HUNGER', hunger: kn.hunger-1})
}

function* getCatImage() {
  const response = yield call(getCatImageApi)
  const dataXml = yield response.text()
  const data2json = JSON.parse(convert.xml2json(dataXml, { compact: true }))

  const url = data2json.response.data.images.image.url._text

  yield put({ type: 'GET_CAT_IMAGE_SUCCESS', catImage: url})
}


// function getFoods() {
//     //list of available foods from api
// }

export default function* rootSaga() {
  yield takeEvery('INCREASE_HUNGER', increaseHunger)
  yield takeEvery('GET_CAT_IMAGE', getCatImage)
}
