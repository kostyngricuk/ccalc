import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import { setCredentials } from '../services/reducers/auth';
import useAuth from '../services/hooks/useAuth';
import { EnumHorizontalPosition } from '../types/global';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, TResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonColor, EnumButtonType } from '../components/UI/Button/Button';
import Text from '../components/UI/Text/Text';


export default function SigninScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { user } = useAuth();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleRegistration = () => navigate(paths.signup.url);

  const onSubmit = handleSubmit((submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { userInfo, token } = submitData;
    setCredentials({
      user: userInfo,
      token
    });
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: TResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  if (user) {
    return <Navigate to='/' replace />
  }
  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('signin.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
        <InputControlled
          type={EnumInputType.email}
          name="email"
          label={t('form.field.email')}
          required
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="password"
          required
          value=""
          label={t('form.field.password')}
          control={control}
        />
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('signin.form.btnSubmit')}
          </Button>
          <Button
            color={EnumButtonColor.black}
            $isOutline
            onClick={handleRegistration}
          >
            {t('signin.form.btnRegistration')}
          </Button>
        </FormField>
      </Form>
      <Text position={EnumHorizontalPosition.center}>
        <Link to={paths.reset.url}>{t('signin.resetPassword')}</Link>
      </Text>
    </Section>
  );
}
