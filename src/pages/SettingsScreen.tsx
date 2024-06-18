import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm, Controller } from 'react-hook-form';

import Section from '@components/UI/Section'
import Title from '@components/UI/Title'
import Button, { EnumButtonColor, EnumButtonType } from '@components/UI/Button'
import Form from '@components/UI/Form'
import FormField, {
  EnumFormFieldType,
} from '@components/UI/FormField'
import { Input, InputControlled } from '@components/UI/Input'
import { Genders, TUser } from '@services/types/user';
import { UNITS } from '@services/constants/global';
import { EnumHorizontalPosition } from '@services/types/global';
import { TResponse, EResponseStatuses } from '@components/UI/Form/types'
import { selectCurrentUser, selectIsLoading } from '@services/hooks/selectors';
import { useAppDispatch, useAppSelector } from '@services/hooks/store';
import { updateRequest } from '@services/reducers/userSlice';

export default function SettingsScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<FieldValues>();

  const isLoading = useAppSelector(selectIsLoading);
  const currentUser = useAppSelector(selectCurrentUser)

  const successCallback = useCallback((data: TUser) => {
    if (data) {
      setResponse({
        status: EResponseStatuses.success,
        message: t('settings.form.res.success')
      });
      reset({
        gender: data?.gender,
        age: data?.age,
        height: data?.height,
        weight: data?.weight,
        weightGoal: data?.weightGoal,
        email: data?.email,
      });
    }
  }, []);

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const {
      gender,
      age,
      height,
      weight,
      weightGoal,
      email,
      oldPassword,
      password,
      confirmPassword
    } = submitData;

    dispatch({
      type: updateRequest.type,
      payload: {
        gender,
        age,
        height,
        weight,
        weightGoal,
        email,
        oldPassword,
        password,
        confirmPassword,
        successCallback
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
      <Title position={EnumHorizontalPosition.center}>{t('settings.title')}</Title>
      <Form onSubmit={onSubmit} response={response} isLoading={isLoading}>
        <FormField>
          <Controller
            name="gender"
            control={control}
            defaultValue={currentUser?.gender}
            rules={{
              required: true,
            }}
            render={({ field, fieldState }) => (
              <FormField type={EnumFormFieldType.row}>
                <Input
                  name={field.name}
                  type='radio'
                  value={Genders.man}
                  label={t('form.field.genderOptions.man')}
                  error={fieldState?.error}
                  onChange={field.onChange}
                  checked={field.value === Genders.man}
                />
                <Input
                  name={field.name}
                  type='radio'
                  value={Genders.woman}
                  label={t('form.field.genderOptions.woman')}
                  error={fieldState?.error}
                  onChange={field.onChange}
                  checked={field.value === Genders.woman}
                />
              </FormField>
            )}
          />
        </FormField>
        <FormField>
          <FormField type={EnumFormFieldType.row}>
            <InputControlled
              required
              type='number'
              value={currentUser?.age?.toString()}
              name="age"
              label={t('form.field.age')}
              control={control}
            />
            <InputControlled
              required
              type='number'
              value={currentUser?.height?.toString()}
              name="height"
              label={t('form.field.height')}
              control={control}
              units={t(`units.${UNITS.sm}`)}
            />
            <InputControlled
              required
              type='number'
              value={currentUser?.weight?.toString()}
              name="weight"
              label={t('form.field.weight')}
              control={control}
              units={t(`units.${UNITS.kg}`)}
            />
          </FormField>
          <InputControlled
            required
            type='number'
            value={currentUser?.weightGoal?.toString()}
            name="weightGoal"
            label={t('form.field.weightGoal')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <InputControlled
          required
          type='email'
          value={currentUser?.email}
          name="email"
          label={t('form.field.email')}
          control={control}
        />
        <InputControlled
          type='password'
          name="oldPassword"
          value=""
          label={t('form.field.oldPassword')}
          control={control}
        />
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
            {t('settings.form.btn.save')}
          </Button>
          <Button
            color={EnumButtonColor.red}
            $isOutline
          >
            {t('settings.form.btn.resetWidget')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
