import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import { EnumHorizontalPosition } from '../types/global';
import useAuth from '../services/hooks/useAuth';
import paths from '../services/router/paths';
import { reqChangePassword } from '../services/api/users';
import { setChangePassword } from '../services/reducers/auth';
import { useAppDispatch } from '../services/hooks/store';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, TResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonType } from '../components/UI/Button/Button';


export default function ChangePasswordScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { newPassword, confirmNewPassword } = submitData;

    if (newPassword !== confirmNewPassword) {
      setResponse({
        status: TResponseStatuses.error,
        message: t('errors.passwordMismatch')
      });
      return;
    }

    const resData = await reqChangePassword({
      email: currentUser?.email,
      password: newPassword
    });

    const {
      success,
      message,
    } = resData;
    if (!success) {
      setResponse({
        status: TResponseStatuses.error,
        message
      });
      return;
    }

    dispatch(setChangePassword(false));
    navigate(paths.home.url);
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: TResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  if (!currentUser) {
    return <Navigate to={paths.signin.url} replace />
  }

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('changePassword.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
        <InputControlled
          type={EnumInputType.password}
          name="newPassword"
          value=""
          label={t('form.field.newPassword')}
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="confirmNewPassword"
          value=""
          label={t('form.field.confirmNewPassword')}
          control={control}
        />
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('changePassword.form.btnSubmit')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
