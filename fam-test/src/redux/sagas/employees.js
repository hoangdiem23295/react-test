import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchListApi} from '../../api/index'
import * as _ from 'lodash'

function* fetchEmployeeList(action) {
  try {
    const res = yield call(fetchListApi, ...action.payload)
    const list = _.get(res, 'data.list', [])
    const itemsTotal = _.get(res, 'data.total', 0)
    yield put({
      type: 'GET_EMPLOYEELIST_SUCCESS',
      employees: list,
      total: itemsTotal
    })
  } catch (err) {
    yield put({
      type: 'GET_EMPLOYEELIST_FAILED',
      message: err.message
    })
  }
}

function* employees() {
  yield takeEvery('GET_EMPLOYEELIST_REQUESTED', fetchEmployeeList)
}

export default employees