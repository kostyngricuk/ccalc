import { TUser } from '../types/user';
import http from '../http';

const update = async (body: TUser) => {
  const { data } = await http.post('/user/update', body);
  return data;
};

export default {
  update
}