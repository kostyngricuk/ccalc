import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import useAuth from '../services/hooks/useAuth';
import { EnumHorizontalPosition } from '../types/global';
import { reqRegister } from '../services/api/users';
import { useAppDispatch } from '../services/hooks/store';
import { setCredentials } from '../services/reducers/auth';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, TResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonColor, EnumButtonType } from '../components/UI/Button/Button';

export default function SignupScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleLogin = () => navigate(paths.signin.url);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { email, password, confirmPassword } = submitData;

    if (password !== confirmPassword) {
      setResponse({
        status: TResponseStatuses.error,
        message: 'Password mismatch!'
      });
      return;
    }

    const response = await reqRegister({
      email,
      password
    });
    if (!response?.data) {
      setResponse({
        status: TResponseStatuses.error,
        message: 'Something went wrong!'
      });
      return;
    }

    const {
      success,
      user,
      token,
      message,
    } = response.data;
    if (!success) {
      setResponse({
        status: TResponseStatuses.error,
        message: message
      });
      return;
    }

    dispatch(setCredentials({
      user,
      token
    }));
  });

  if (user) {
    navigate(paths.home.url);
  }

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
      <Title position={EnumHorizontalPosition.center}>{t('signup.title')}</Title>
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
        <InputControlled
          type={EnumInputType.password}
          name="confirmPassword"
          required
          value=""
          label={t('form.field.confirmPassword')}
          control={control}
        />
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('signup.form.btnSubmit')}
          </Button>
          <Button
            color={EnumButtonColor.black}
            $isOutline
            onClick={handleLogin}
          >
            {t('signup.form.btnLogin')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
