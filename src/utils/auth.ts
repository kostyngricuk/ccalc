import { TUser } from 'types/user';

const hasAdditionalInfo = (user: TUser) => {
  if ( user?.gender && user?.age && user?.height && user?.weight && user?.weightGoal) {
    return true;
  }
  return false;
};
export default hasAdditionalInfo;