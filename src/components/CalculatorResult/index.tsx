import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@services/hooks/store';
import { selectProductSelectedItems } from '@services/hooks/selectors';
import { getTottal } from '@services/utils/calculations';
import Button, { EnumButtonType } from '@components/UI/Button'
import { reqSaveCalcAction } from '@services/constants/global';
import FormField, { EnumFormFieldType } from '@components/UI/FormField'
import TitleValue from '@components/TitleValue'

export default function CalculatorResult() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedProducts = useAppSelector(selectProductSelectedItems);

  const {
    weight,
    kkal,
    proto,
    fats,
    carbo
  } = getTottal(selectedProducts);

  const saveResult = () => {
    dispatch({
      type: reqSaveCalcAction,
      payload: {
        count: kkal
      }
    });
  }

  return selectedProducts.length > 0 ? (
    <>
      <FormField type={EnumFormFieldType.row}>
        <TitleValue title={t('units.weight')} value={weight}/>
        <TitleValue title={t('units.kkal')} value={kkal}/>
      </FormField>
      <FormField type={EnumFormFieldType.row}>
        <TitleValue title={t('units.proto')} value={proto}/>
        <TitleValue title={t('units.fats')} value={fats}/>
        <TitleValue title={t('units.carbo')} value={carbo}/>
      </FormField>
      <FormField type={EnumFormFieldType.actions}>
        <Button
          type={EnumButtonType.button}
          onClick={saveResult}
        >
          {t('calculator.form.btn.saveResult')}
        </Button>
      </FormField>
    </>
  ) : (
    <p>{t('calculator.res.noSelectedItems')}</p>
  )
}
