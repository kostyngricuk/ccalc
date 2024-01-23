import { useMemo } from "react";
import { StyleCalorieWidget, Color } from "./StyledCalorieWidget";
import { useTranslation } from "react-i18next";

export const CalorieWidget = ({
    eaten,
    limit
}: {
    eaten:number,
    limit: number
}) => {
    const { t } = useTranslation();

    const color = useMemo(() => {
        const remain:number = limit - eaten;
        if (remain < 0) {
            return Color.red;
        }
        if (remain <= limit * 0.25) {
            return Color.gray;
        }
        if (remain <= limit * 0.5) {
            return Color.secondary;
        }
        return Color.primary;
    }, [eaten, limit])

    return (
        <StyleCalorieWidget $color={color} className="CalorieWidget">
            { limit - eaten }
            <span>{t('calorieWidget.cal')}</span>
        </StyleCalorieWidget>
    );
}