import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import paths from '@services/router/paths';
import { EnumHorizontalPosition } from '@services/types/global';

import Section from '@components/UI/Section'
import Title from '@components/UI/Title'
import Form from '@components/UI/Form'
import { TResponse, EResponseStatuses } from '@components/UI/Form/types'
import FormField, { EnumFormFieldType } from '@components/UI/FormField'
import { InputControlled } from '@components/UI/Input'
import Button, { EnumButtonColor, EnumButtonType } from '@components/UI/Button'
import { useAppDispatch, useAppSelector } from '@services/hooks/store';
import { selectCurrentUser, selectIsLoading } from '@services/hooks/selectors';
import { changePasswordRequest, resetRequest, sendCodeRequest } from '@services/reducers/userSlice';
import hasAdditionalInfo from '@services/utils/auth';

export default function ResetScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const [isCodeVerified, setIsCodeVerified] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();
  const handleLogin = () => navigate(paths.signin.path);

  const isLoading = useAppSelector(selectIsLoading);
  const currentUser = useAppSelector(selectCurrentUser);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }

    if (isCodeVerified) {
      const { password, confirmPassword } = submitData;
      dispatch({
        type: changePasswordRequest.type,
        payload: {
          email: currentUser?.email,
          password,
          confirmPassword,
          navigate
        }
      });
      return;
    }

    const {
      code,
      email
    } = submitData;
    if (currentUser && code) {
      dispatch({
        type: sendCodeRequest.type,
        payload: {
          email: currentUser?.email,
          code: submitData.code
        }
      });
      return;
    }

    dispatch({
      type: resetRequest.type,
      payload: {
        email
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

  useEffect(() => {
    if (currentUser && hasAdditionalInfo(currentUser)) {
      setIsCodeVerified(true);
    }
  }, [currentUser]);

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{isCodeVerified ? t('changePassword.title') : t('reset.title')}</Title>
      {
        !currentUser?.email && (
          <Form onSubmit={onSubmit} response={response}>
            <InputControlled
              type='email'
              name="email"
              label={t('form.field.email')}
              required
              control={control}
            />
            <FormField type={EnumFormFieldType.actions}>
              <Button type={EnumButtonType.submit}>
                {t('reset.form.btn.submit')}
              </Button>
              <Button
                color={EnumButtonColor.black}
                $isOutline
                onClick={handleLogin}
              >
                {t('reset.form.btn.login')}
              </Button>
            </FormField>
          </Form>
        )
      }
      {
        currentUser?.email && !isCodeVerified && (
          <Form onSubmit={onSubmit} response={response} isLoading={isLoading}>
            <InputControlled
              type='number'
              name="code"
              label={t('form.field.code')}
              required
              control={control}
            />
            <FormField type={EnumFormFieldType.actions}>
              <Button type={EnumButtonType.submit}>
                {t('reset.form.btn.submitCode')}
              </Button>
            </FormField>
          </Form>
        )
      }
      {
        currentUser?.email && isCodeVerified && (
          <Form onSubmit={onSubmit} response={response} isLoading={isLoading}>
            <InputControlled
              type='password'
              name="password"
              value=""
              label={t('form.field.newPassword')}
              control={control}
            />
            <InputControlled
              type='password'
              name="confirmPassword"
              value=""
              label={t('form.field.confirmNewPassword')}
              control={control}
            />
            <FormField type={EnumFormFieldType.actions}>
              <Button type={EnumButtonType.submit}>
                {t('changePassword.form.btn.submit')}
              </Button>
            </FormField>
          </Form>
        )
      }
    </Section>
  );
}
