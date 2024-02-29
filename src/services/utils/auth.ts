import { TUser } from "../../types/user";

export const hasAdditionalInfo = (user: TUser) => {
  if (
    !user?.gender ||
    !user?.age ||
    !user?.height ||
    !user?.weight ||
    !user?.weightGoal
  ) {
    return false;
  }
  return true;
};