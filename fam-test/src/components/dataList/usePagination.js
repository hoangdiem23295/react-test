import {useState, useEffect} from 'react'
import {fetchListApi} from '../../api/index'
import * as _ from 'lodash'

const usePagination = (page=1, limit=5) => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)

  const getData = async () => {
    const res = await fetchListApi(page, limit)
    if (res) {
      const list = _.get(res, 'data.list', [])
      const itemsTotal = _.get(res, 'data.total', 0)
      setData(list)
      setTotal(itemsTotal)
    }
  }

  useEffect(() => {
    getData()
  }, [page])
  return [data, total]
}

export default usePagination