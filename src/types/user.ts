export enum Genders {
  man = 'man',
  woman = 'woman',
}

export interface IUser {
  id?: string,
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

export type TUser = IUser | null | undefined;
