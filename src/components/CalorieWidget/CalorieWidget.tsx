import { useMemo } from "react";
import { StyleCalorieWidget, Color } from "./StyledCalorieWidget";

export const CalorieWidget = ({
    value,
    limit
}: {
    value:number,
    limit: number
}) => {
    const color = useMemo(() => {
        if (value < 0) {
            return Color.red;
        }
        if (value <= limit * 0.25) {
            return Color.gray;
        }
        if (value <= limit * 0.5) {
            return Color.secondary;
        }
        return Color.primary;
    }, [value, limit])

    return (
        <StyleCalorieWidget $color={color}>
            { value }
            <span>cal</span>
        </StyleCalorieWidget>
    );
}