import * as type from '../types'

const initialState = {
  data: [],
  total: 0,
  loading: false,
  error: null
}

export default function employees(state = initialState, action) {
  switch (action.type) {
    case type.GET_EMPLOYEELIST_REQUESTED:
      return {
        ...state,
        loading: true,
        data: []
      }
    case type.GET_EMPLOYEELIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.employees,
        total: action.total
      }
    case type.GET_EMPLOYEELIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state
  }
}