import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@components/UI/Section/Section';
import Title from '@components/UI/Title/Title';

export default function FaqScreen() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t('faq.title')}</Title>
    </Section>
  );
}
