import { TUser } from "../../types/user";

const users = [
    {
        id: 0,
        height: 180,
        weight: 85,
        weightGoal: 80,
        age: 25,
        gender: 'man',
        email: 'testuser@gmail.com',
        calorieWidget: {
            limit: 1805,
            eaten: 200
        }
    }
] as TUser[];

export const getUserById = (id: number):TUser => {
    const targetUser = users.find(user => user?.id === id);
    if (targetUser) {
        return targetUser;
    }
    return null;
}