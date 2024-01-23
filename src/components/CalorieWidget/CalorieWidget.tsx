import { useMemo } from "react";
import { StyleCalorieWidget, Color } from "./StyledCalorieWidget";
import { useTranslation } from "react-i18next";

export const CalorieWidget = ({
    value,
    limit
}: {
    value:number,
    limit: number
}) => {
    const { t } = useTranslation();

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
        <StyleCalorieWidget $color={color} className="CalorieWidget">
            { value }
            <span>{t('calorieWidget.cal')}</span>
        </StyleCalorieWidget>
    );
}