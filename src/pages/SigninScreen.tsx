import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { IAuthContext } from '../types/user';
import AuthContext from '../services/contexts';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';

export default function SigninScreen() {
  const { t } = useTranslation();
  const {
    currentUser,
  } = useContext<IAuthContext>(AuthContext);
  if (currentUser) {
    return <Navigate to='/' replace />
  }
  return (
    <Section>
      <Title>{t('signin.title')}</Title>
    </Section>
  );
}
