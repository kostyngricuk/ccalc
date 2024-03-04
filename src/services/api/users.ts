import http from '../http';

import { Genders, IUser } from '../../types/user';
import { API_LOGIN, API_REGISTER, API_USER_UPDATE } from '../constants/api';

interface IResAuth {
  success: boolean,
  user?: IUser,
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

export const updateUserInfo = async ({
  gender,
  age,
  height,
  weight,
  weightGoal
}: {
  gender?: Genders,
  age?: number,
  height?: number,
  weight?: number,
  weightGoal?: number,
}) => {
  try {
    return await http.post<IResAuth>(API_USER_UPDATE, {
      gender,
      age,
      height,
      weight,
      weightGoal
    });
  } catch (error) {
    return null;
  }
}