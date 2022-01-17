import kwRequest from '../../index'
import { IDataType } from '@/service/types'
export function getPageListData(url: string, queryInfo: any) {
  return kwRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
