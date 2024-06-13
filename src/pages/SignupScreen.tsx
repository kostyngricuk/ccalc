import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '@services/router/paths';
import { EnumHorizontalPosition } from '@services/types/global';

import Section from '@components/UI/Section/Section';
import Title from '@components/UI/Title/Title';
import Form from '@components/UI/Form/Form';
import { TResponse, EResponseStatuses } from '@components/UI/Form/types';
import FormField, { EnumFormFieldType } from '@components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '@components/UI/Input/Input';
import Button, { EnumButtonColor, EnumButtonType } from '@components/UI/Button/Button';
import { useAppDispatch, useAppSelector } from '@services/hooks/store';
import { registerRequest } from '@services/reducers/userSlice';
import { selectIsLoading } from '@services/hooks/selectors';

export default function SignupScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleLogin = () => navigate(paths.signin.url);

  const isLoading = useAppSelector(selectIsLoading);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { email, password, confirmPassword } = submitData;

    dispatch({
      type: registerRequest.type,
      payload: {
        email,
        password,
        confirmPassword
      }
    });
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: EResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('signup.title')}</Title>
      <Form onSubmit={onSubmit} response={response} isLoading={isLoading}>
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
            {t('signup.form.btn.submit')}
          </Button>
          <Button
            color={EnumButtonColor.black}
            $isOutline
            onClick={handleLogin}
          >
            {t('signup.form.btn.login')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
