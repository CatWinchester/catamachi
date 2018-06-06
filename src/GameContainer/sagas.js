import { call, put, takeEvery, select } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
import convert from 'xml-js';
import { getCatNeeds, getClicksNumber } from './reducers'

function getCatImageApi () {
  return fetch(
    'http://thecatapi.com/api/images/get?format=xml&results_per_page=1'
  )
}

function* increaseHunger() {
  const kn = yield select(getCatNeeds)
  yield put({ type: 'SET_HUNGER', hunger: kn.hunger-1})
}

function* decreaseHunger({name}) {
  const kn = yield select(getCatNeeds)
  let food = kn.avialableFood;
  food[name] = food[name]-1;
  yield put({ type: 'SET_FOOD', food})
  yield put({ type: 'SET_HUNGER', hunger: kn.hunger + 3})
}

function* getCatImage() {
  try {
    const response = yield call(getCatImageApi)
    const dataXml = yield response.text()
    const data2json = JSON.parse(convert.xml2json(dataXml, { compact: true }))
    const url = data2json.response.data.images.image.url._text
    yield put({ type: 'GET_CAT_IMAGE_SUCCESS', catImage: url})
  } catch(err) {
    console.log('GET_CAT_IMAGE_FAILURE', err)
    yield put({ type: 'GET_CAT_IMAGE_FAILURE', err: err})
  }
}

function* increaseClicker() {
  // const kn = yield select(getCatNeeds)
  const clickedTimes = yield select(getClicksNumber)
  yield put({ type: 'SET_CLICKER', clickedTimes: clickedTimes + 1 })
}

export default function* rootSaga() {
  yield takeEvery('INCREASE_HUNGER', increaseHunger)
  yield takeEvery('DECREASE_HUNGER', decreaseHunger)
  yield takeEvery('GET_CAT_IMAGE', getCatImage)
  yield takeEvery('INCREASE_CLICKER', increaseClicker)
}
