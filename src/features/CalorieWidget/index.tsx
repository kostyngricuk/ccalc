import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { StyleCalorieWidget, Color } from './StyledCalorieWidget';

export default function CalorieWidget({
  eaten = 0,
  limit = 0,
}: {
  eaten?: number,
  limit?: number
}) {
  const { t } = useTranslation();

  const remain:number = limit - eaten;

  const color = useMemo(() => {
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
    <StyleCalorieWidget color={color} className="CalorieWidget" data-testid="calorieWidget">
      { remain }
      <span>{t('calorieWidget.cal')}</span>
    </StyleCalorieWidget>
  );
}
