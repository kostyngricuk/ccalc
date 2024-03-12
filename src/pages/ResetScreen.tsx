import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import { EnumHorizontalPosition } from '../services/types/global';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonColor, EnumButtonType } from '../components/UI/Button/Button';
import { useAppSelector } from '../services/hooks/store';
import { selectCurrentUserEmail } from '../services/hooks/selectors';

export default function SigninScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate()

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleLogin = () => navigate(paths.signin.url);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => submitData);

  const onSubmitCode = handleSubmit(async (submitData: FieldValues) => submitData);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: EResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  const userEmail = useAppSelector(selectCurrentUserEmail);

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
