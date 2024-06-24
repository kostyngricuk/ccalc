import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Title from '@components/UI/Title'
import { EnumHorizontalPosition } from '@services/types/global';
import ProductList from '@components/ProductList'
import Columns from '@components/UI/Columns'
import CalculatorResult from '@components/CalculatorResult'
import SearchProductForm from '@components/SearchProductForm'

const GreenWrapper = styled.div`
  background-color: var(--color-primaryLight);
`;

export default function CalculatorScreen() {
  const { t } = useTranslation();

  return (
    <Columns>
      <div>
        <Title position={EnumHorizontalPosition.center} variant='h2'>{t('calculator.form.title')}</Title>
        <SearchProductForm />
        <ProductList />
      </div>
      <GreenWrapper>
        <Title position={EnumHorizontalPosition.center} variant='h2'>{t('calculator.res.title')}</Title>
        <CalculatorResult />
      </GreenWrapper>
    </Columns>
  );
}
