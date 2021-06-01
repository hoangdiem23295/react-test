import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployeeList } from '../../redux/actions/employees'

const usePagination = (page=1, limit=5) => {
  const dispatch = useDispatch()
  const employees = useSelector(state => state.employees.data)
  const loading = useSelector(state => state.employees.loading)
  const total = useSelector(state => state.employees.total)

  useEffect(() => {
    dispatch(getEmployeeList(page, limit))
  }, [page, limit, dispatch])
  return [loading, employees, total]
}

export default usePagination