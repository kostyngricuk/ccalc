import http from '../http';

import { IUser } from '../../types/user';
import { API_LOGIN, API_REGISTER } from '../constants/api';

// const users = [
//   {
//     id: 0,
//     height: 180,
//     weight: 85,
//     weightGoal: 80,
//     age: 25,
//     gender: Genders.man,
//     email: 'tesIUser@gmail.com',
//     calorieWidget: {
//       limit: 1805,
//       eaten: 200,
//     },
//   },
// ] as IUser[];

interface IResAuth {
  success: boolean,
  user?: IUser,
  token?: string | null,
  message?: string
}

export const reqLogin = async ({
  email,
  password
}: {
  email: string,
  password: string
}) => {
  try {
    return await http.post<IResAuth>(API_LOGIN, {
      email,
      password
    });
  } catch (error) {
    return null;
  }
}

export const reqRegister = async ({
  email,
  password
}: {
  email: string,
  password: string
}) => {
  try {
    return await http.post<IResAuth>(API_REGISTER, {
      email,
      password
    });
  } catch (error) {
    return null;
  }
}
