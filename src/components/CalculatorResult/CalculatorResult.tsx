import React from "react";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "../../services/hooks/store";
import { selectProductSelectedItems } from "../../services/hooks/selectors";
import { getTottal } from "../../services/utils/calculations";

export default function CalculatorResult() {
  const { t } = useTranslation();
  const selectedProducts = useAppSelector(selectProductSelectedItems);

  const tottal = getTottal(selectedProducts);

  return (
    <>
      <p>
        <strong>{t('units.weight')}:</strong> { tottal.weight }
      </p>
      <p>
        <strong>{t('units.kkal')}:</strong> { tottal.kkal }
      </p>
      <hr />
      <p>
        <strong>{t('units.proto')}:</strong> { tottal.proto }
      </p>
      <p>
        <strong>{t('units.fats')}:</strong> { tottal.fats }
      </p>
      <p>
        <strong>{t('units.carbo')}:</strong> { tottal.carbo }
      </p>
    </>
  )
}
