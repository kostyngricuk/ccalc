import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { StyleCalorieWidget, Color } from './StyledCalorieWidget';

export default function CalorieWidget({
  eaten = 0,
  limit = 0,
}: {
  eaten: number | undefined,
  limit: number | undefined
}) {
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
  }, [eaten, limit]);

  return (
    <StyleCalorieWidget $color={color} className="CalorieWidget">
      { limit - eaten }
      <span>{t('calorieWidget.cal')}</span>
    </StyleCalorieWidget>
  );
}
