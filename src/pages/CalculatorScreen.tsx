import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../components/UI/Title/Title';
import { EnumHorizontalPosition, EnumTitleVariant } from '../services/types/global';
import ProductList from '../components/ProductList/ProductList';
import Columns from '../components/UI/Columns/Columns';
import CalculatorResult from '../components/CalculatorResult/CalculatorResult';
import SearchProductForm from '../components/SearchProductForm/SearchProductForm';

export default function CalculatorScreen() {
  const { t } = useTranslation();

  return (
    <Columns>
      <div>
        <Title position={EnumHorizontalPosition.center} variant={EnumTitleVariant.h2}>{t('calculator.form.title')}</Title>
        <SearchProductForm />
        <ProductList />
      </div>
      <div style={{backgroundColor: 'var(--color-lightgreen)'}}>
        <Title position={EnumHorizontalPosition.center} variant={EnumTitleVariant.h2}>{t('calculator.res.title')}</Title>
        <CalculatorResult />
      </div>
    </Columns>
  );
}
