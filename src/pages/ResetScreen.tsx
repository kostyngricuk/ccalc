import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import useAuth from '../services/hooks/useAuth';
import { EnumHorizontalPosition } from '../types/global';
import { reqReset, reqSendCode } from '../services/api/users';
import { useAppDispatch } from '../services/hooks/store';
import { setCredentials, setChangePassword } from '../services/reducers/auth';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonColor, EnumButtonType } from '../components/UI/Button/Button';


export default function SigninScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const [userEmail, setUserEmail] = useState<string|null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { isChangePassword } = useAuth();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleLogin = () => navigate(paths.signin.url);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { email } = submitData;

    const resData = await reqReset({
      email
    });

    const {
      success,
      message,
    } = resData;

    if (!success) {
      setResponse({
        status: EResponseStatuses.error,
        message
      });
      return;
    }

    setUserEmail(email);
    setResponse(null);
  });

  const onSubmitCode = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { code } = submitData;

    const resData = await reqSendCode({
      email: userEmail,
      code
    });

    const {
      success,
      user,
      message,
    } = resData;

    if (!success) {
      setResponse({
        status: EResponseStatuses.error,
        message
      });
      return;
    }

    dispatch(setCredentials({
      currentUser: user
    }));
    dispatch(setChangePassword(true));
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: EResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  if (isChangePassword) {
    return <Navigate to={paths.changePassword.url} replace />
  }
  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('reset.title')}</Title>
      {
        userEmail ? (
          <Form onSubmit={onSubmitCode} response={response}>
            <InputControlled
              type={EnumInputType.number}
              name="code"
              label={t('form.field.code')}
              required
              control={control}
            />
            <FormField type={EnumFormFieldType.actions}>
              <Button type={EnumButtonType.submit}>
                {t('reset.form.btnSubmitCode')}
              </Button>
            </FormField>
          </Form>
        ) : (
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
        )
      }
    </Section>
  );
}
