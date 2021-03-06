import React, {useState} from 'react'
import './list.css'
import usePagination from './usePagination'
import { BASE_URL } from '../../constant/index'
import { LIMIT_EMPLOYEES_PAGE } from '../../constant/index'

const DataList = () => {
  const [pageActive, setPageActive] = useState(1)
  const [
    loading, employees, paginationArr
  ] = usePagination(pageActive, LIMIT_EMPLOYEES_PAGE, BASE_URL)
  
  return (
    <div>
      <h1>Employees</h1>
      {
        loading ? <p>Loading...</p> : employees.length ? (
          <>
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
                  employees.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.position}</td>
                      </tr>
                    )
                  })
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
          </>
        ) : null
      }
      
    </div>
  )
}

export default DataList
