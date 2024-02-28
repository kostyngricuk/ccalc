import http from '../http';

import { IUser } from '../../types/user';
import { API_LOGIN, API_REGISTER, API_USER_UPDATE } from '../constants/api';

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

export const updateUserInfo = async ({
  email,
  token
}: {
  email: string,
  token?: string | null
}) => {
  try {
    return await http.post<IResAuth>(API_USER_UPDATE, {
      email,
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  } catch (error) {
    return null;
  }
}