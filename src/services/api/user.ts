import http from 'services/http';
import { IUserState, TUser } from 'types/user';

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

const eaten = async (body: {
  count: number,
}) => {
  const { data } = await http.post<IUserState>('/user/eaten', body);
  return data;
};

export default {
  update,
  changePassword,
  eaten
}