export const calcDailyLimit = ({
    height,
    weightGoal,
    age,
    gender
}: {
    height: number,
    weightGoal: number,
    age: number,
    gender: 'man' | 'woman'
}) => {
    if (gender === 'man') {
        return 10 * weightGoal + 6.25 * height - 5 * age + 5;
    }
    return 10 * weightGoal + 6.25 * height - 5 * age - 161;
}