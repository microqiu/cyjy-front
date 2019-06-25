import request from 'umi-request';
import { FromDataType } from './index';

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

interface ResultBean<T> {
  code: number;
  data: T;
  message: string;
}

export async function fakeAccountLogin(params: FromDataType): Promise<ResultBean<boolean>> {
  return request('/login', {
    method: 'POST',
    data: params,
  });
}

interface Admin {
  username: string;
  avatat: string;
}


export async function getCurrentUserInfo(): Promise<ResultBean<Admin>> {
  return request('/admin-api/users/current');
}