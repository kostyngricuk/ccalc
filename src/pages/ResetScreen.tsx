import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import useAuth from '../services/hooks/useAuth';
import { EnumHorizontalPosition } from '../types/global';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, TResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonColor, EnumButtonType } from '../components/UI/Button/Button';


export default function SigninScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { user } = useAuth();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleLogin = () => navigate(paths.signin.url);

  const onSubmit = handleSubmit((submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
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
      <Title position={EnumHorizontalPosition.center}>{t('reset.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
        <InputControlled
          type={EnumInputType.email}
          name="email"
          label={t('form.field.email')}
          required
          control={control}
        />
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('reset.form.btnSubmit')}
          </Button>
          <Button
            color={EnumButtonColor.black}
            $isOutline
            onClick={handleLogin}
          >
            {t('reset.form.btnLogin')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
