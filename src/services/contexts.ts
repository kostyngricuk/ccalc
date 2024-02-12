import { createContext } from 'react';
import { IAuthContext } from '../types/user';

const AuthContext = createContext<IAuthContext>({});
export default AuthContext;
