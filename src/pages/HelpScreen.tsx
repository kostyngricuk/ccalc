import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from 'components/Section'
import Title from 'components/Title'

export default function HelpScreen() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t('help.title')}</Title>
    </Section>
  );
}
