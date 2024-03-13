import { IUserState, TUser } from '../types/user';
import http from '../http';

const update = async (body: TUser) => {
  const { data } = await http.post<IUserState>('/user/update', body);
  return data;
};

const changePassword = async (body: {
  email: string,
  password: string
}) => {
  const { data } = await http.post<IUserState>('/user/changePassword', body);
  return data;
};

export default {
  update,
  changePassword
}