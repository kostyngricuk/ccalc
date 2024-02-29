import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import { setCredentials } from '../services/reducers/auth';
import { useAppDispatch } from '../services/hooks/store';
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
import { reqLogin } from '../services/api/users';


export default function   SigninScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleRegistration = () => navigate(paths.signup.url);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const { email, password } = submitData;

    const response = await reqLogin({
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
      currentUser: user
    }));
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: TResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

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
