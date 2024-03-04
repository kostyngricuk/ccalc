import http from '../http';

import { Genders, IUser } from '../../types/user';
import {
  API_LOGIN,
  API_REGISTER,
  API_RESET_PASSWORD,
  API_VERIFY_CODE,
  API_USER_UPDATE,
  API_CHANGE_PASSWORD
} from '../constants/api';

export interface IRes {
  success: boolean,
  message?: string
}

interface IResAuth extends IRes {
  user?: IUser,
}

const undefinedErrorResponse = {
  success: false,
  message: 'Something went wrong!'
} as IRes;

export const reqLogin = async ({
  email,
  password
}: {
  email: string,
  password: string
}) => {
  try {
    const res = await http.post<IResAuth>(API_LOGIN, {
      email,
      password
    });

    return res?.data;
  } catch (error) {
    return undefinedErrorResponse as IResAuth;
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
    const res = await http.post<IResAuth>(API_REGISTER, {
      email,
      password
    });
    return res?.data;
  } catch (error) {
    return undefinedErrorResponse as IResAuth;
  }
}

export const reqReset = async ({
  email,
}: {
  email: string,
}) => {
  try {
    const res = await http.post<IRes>(API_RESET_PASSWORD, {
      email,
    });
    return res?.data;
  } catch (error) {
    return undefinedErrorResponse;
  }
}

export const reqSendCode = async ({
  email,
  code,
}: {
  email: string | null,
  code: number,
}) => {
  try {
    const res = await http.post<IResAuth>(API_VERIFY_CODE, {
      email,
      code,
    });
    return res?.data;
  } catch (error) {
    return undefinedErrorResponse as IResAuth;
  }
}

export const reqChangePassword = async ({
  email,
  password,
}: {
  email: string | undefined,
  password: string,
}) => {
  try {
    const res = await http.post<IResAuth>(API_CHANGE_PASSWORD, {
      email,
      password,
    });
    return res?.data;
  } catch (error) {
    return undefinedErrorResponse as IResAuth;
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
    const res = await http.post<IResAuth>(API_USER_UPDATE, {
      gender,
      age,
      height,
      weight,
      weightGoal
    });
    return res?.data;
  } catch (error) {
    return undefinedErrorResponse as IResAuth;
  }
}