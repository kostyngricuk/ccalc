import { IUserState, TUser } from '@services/types/user';
import http from '@services/http';

export interface IAuthResponse {
  user: TUser,
  errorCode: string,
  success: boolean
}
const login = async (body: {
  email: string,
  password: string
}) => {
  const { data } = await http.post('/auth/login', body);
  return data;
};

const register = async (body: {
  email: string,
  password: string
}) => {
  const { data } = await http.post<IUserState>('/auth/register', body);
  return data;
};

const resetPassword = async (body: {
  email: string
}) => {
  const { data } = await http.post<IUserState>('/auth/reset', body);
  return data;
};

const sendCode = async (body: {
  email: string,
  code: number
}) => {
  const { data } = await http.post<IUserState>('/auth/verifyCode', body);
  return data;
};

export default {
  login,
  register,
  sendCode,
  resetPassword
}