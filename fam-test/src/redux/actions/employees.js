import * as type from '../types'

export function getDataList(...params) {
  return {
    type: type.GET_EMPLOYEELIST_REQUESTED,
    payload: params
  }
}

// export function resetEmployeeList(employeeList) {
//   return {
//     type: type.RESET_EMPLOYEELIST_REQUESTED,
//     payload: employeeList
//   }
// }