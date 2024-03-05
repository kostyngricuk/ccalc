import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { EnumHorizontalPosition } from '../services/types/global';
import paths from '../services/router/paths';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonType } from '../components/UI/Button/Button';
import { IUser } from '../services/types/user';


export default function ChangePasswordScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const onSubmit = handleSubmit(async (submitData: FieldValues) => submitData);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: EResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  const currentUser: IUser = {
    email: 'test@gmail.com'
  }

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
