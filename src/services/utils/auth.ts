import { TUser } from '@services/types/user';

const hasAdditionalInfo = (user: TUser) => {
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
export default hasAdditionalInfo;