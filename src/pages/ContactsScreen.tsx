import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@components/Section'
import Title from '@components/Title'

export default function ContactsScreen() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t('contacts.title')}</Title>
    </Section>
  );
}
