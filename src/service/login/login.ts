import kwRequest from '../index'
import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'
// 借助枚举类型，方便管理所有登录接口
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return kwRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return kwRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusById(id: number) {
  return kwRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
