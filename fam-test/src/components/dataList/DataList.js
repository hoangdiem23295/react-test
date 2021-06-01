import React, {useState, useMemo} from 'react'
import './list.css'
import usePagination from './usePagination'
import { getTotalPages } from '../../helpers/index';
import { LIMIT_EMPLOYEES_PAGE } from '../../constant/index'

const DataList = () => {
  const [pageActive, setPageActive] = useState(1)
  const [
    data,
    total
  ] = usePagination(pageActive, LIMIT_EMPLOYEES_PAGE)
  const totalPages = useMemo(() => getTotalPages(total, LIMIT_EMPLOYEES_PAGE), [total])
  const paginationArr = Array(totalPages).fill().map((_, index)=>index+1)
  
  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.length ? data.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.position}</td>
                </tr>
              )
            }) : <tr><td colSpan={2}>empty data</td></tr>
          }
        </tbody>
      </table>
      <ul className="pagination">
        {
          paginationArr.map(page=>
            <li
              key={page}
              onClick={()=>setPageActive(page)}
            >
              {page}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default DataList
