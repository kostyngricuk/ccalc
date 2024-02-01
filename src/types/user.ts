export enum Genders {
  man = 'man',
  woman = 'woman',
}

interface IUser {
  id?: number,
  height?: number,
  weight?: number,
  weightGoal?: number,
  age?: number,
  gender?: Genders,
  email?: string,
  calorieWidget?: {
    limit: number,
    eaten: number,
  },
}

export type TUser = IUser | null;
export interface IAuthContext {
  currentUser?: TUser,
  setCurrentUser?: any,
}
