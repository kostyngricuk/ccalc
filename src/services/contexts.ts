import { createContext } from 'react';
import { IAuthContext } from '../types/user';

export const AuthContext = createContext<IAuthContext>({});