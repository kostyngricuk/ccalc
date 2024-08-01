import http from 'services/http';
import { TUser } from 'types/user';

const update = async (body: TUser) => {
  const { data } = await http.post('/user/update', body);
  return data;
};

const changePassword = async (body: {
  email: string,
  password: string
}) => {
  const { data } = await http.post('/user/changePassword', body);
  return data;
};

const eaten = async (body: {
  count: number,
}) => {
  const { data } = await http.post('/user/eaten', body);
  return data;
};

export default {
  update,
  changePassword,
  eaten
}