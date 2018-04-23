import { call, put, takeEvery, } from 'redux-saga/effects'
import convert from 'xml-js';

function getCatImageApi () {
  return fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
}

function* getCatImage() {
  const response = yield call(getCatImageApi)
  const dataXml = yield response.text()
  const data2json = JSON.parse(convert.xml2json(dataXml, { compact: true }))

  const url = data2json.response.data.images.image.url._text

  yield put({ type: 'GET_CAT_IMAGE_SUCCESS', catImage: url})
}

function getFoodImages() {
    
}

export default function* rootSaga() {
  yield takeEvery('GET_CAT_IMAGE', getCatImage)
}
