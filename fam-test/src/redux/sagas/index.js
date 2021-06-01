import { all } from 'redux-saga/effects'
import employees from './employees'

export default function* rootSaga() {
  yield all([
    employees()
  ])
}