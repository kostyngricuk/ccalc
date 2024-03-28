import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm, Controller } from 'react-hook-form';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Button, { EnumButtonColor, EnumButtonType } from '../components/UI/Button/Button';
import Form from '../components/UI/Form/Form';
import FormField, {
  EnumFormFieldType,
} from '../components/UI/FormField/FormField';
import { EnumInputType, Input, InputControlled } from '../components/UI/Input/Input';
import { Genders, TUser } from '../services/types/user';
import { UNITS } from '../services/constants/global';
import { EnumHorizontalPosition } from '../services/types/global';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import { selectCurrentUser, selectIsLoading } from '../services/hooks/selectors';
import { useAppDispatch, useAppSelector } from '../services/hooks/store';
import { updateRequest } from '../services/reducers/userSlice';

export default function SettingsScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, reset, formState: { errors } } = useForm<FieldValues>();

  const isLoading = useAppSelector(selectIsLoading);
  const currentUser = useAppSelector(selectCurrentUser)

  const successCallback = useCallback((data: TUser) => {
    if (!data) {
      return;
    }

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
                  type={EnumInputType.radio}
                  value={Genders.man}
                  label={t('form.field.genderOptions.man')}
                  error={fieldState?.error}
                  onChange={field.onChange}
                  checked={field.value === Genders.man}
                />
                <Input
                  name={field.name}
                  type={EnumInputType.radio}
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
              type={EnumInputType.number}
              value={currentUser?.age?.toString()}
              name="age"
              label={t('form.field.age')}
              control={control}
            />
            <InputControlled
              type={EnumInputType.number}
              value={currentUser?.height?.toString()}
              name="height"
              label={t('form.field.height')}
              control={control}
              units={t(`units.${UNITS.sm}`)}
            />
            <InputControlled
              type={EnumInputType.number}
              value={currentUser?.weight?.toString()}
              name="weight"
              label={t('form.field.weight')}
              control={control}
              units={t(`units.${UNITS.kg}`)}
            />
          </FormField>
          <InputControlled
            type={EnumInputType.number}
            value={currentUser?.weightGoal?.toString()}
            name="weightGoal"
            label={t('form.field.weightGoal')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <InputControlled
          type={EnumInputType.email}
          value={currentUser?.email}
          name="email"
          label={t('form.field.email')}
          required
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="oldPassword"
          value=""
          label={t('form.field.oldPassword')}
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="password"
          value=""
          label={t('form.field.newPassword')}
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="confirmPassword"
          value=""
          label={t('form.field.confirmNewPassword')}
          control={control}
        />
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('settings.form.btnSave')}
          </Button>
          <Button
            color={EnumButtonColor.red}
            $isOutline
          >
            {t('settings.form.btnResetWidget')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
