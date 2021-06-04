import {useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataList } from '../../redux/actions/employees'
import { getTotalPages } from '../../helpers/index';
import { LIMIT_EMPLOYEES_PAGE } from '../../constant/index'


const usePagination = (page=1, limit=5, url) => {
  const dispatch = useDispatch()
  const employees = useSelector(state => state.employees.data)
  const loading = useSelector(state => state.employees.loading)
  const total = useSelector(state => state.employees.total)
  const totalPages = useMemo(() => getTotalPages(total, LIMIT_EMPLOYEES_PAGE), [total])
  const paginationArr = Array(totalPages).fill().map((_, index)=>index+1)

  useEffect(() => {
    dispatch(getDataList(page, limit, url))
  }, [page, limit, dispatch, url])


  return [loading, employees, paginationArr]
}

export default usePagination