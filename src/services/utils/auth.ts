import { TUser } from "../../types/user";

export const hasAdditionalInfo = (user: TUser) => !!user?.gender;