import React, { useEffect, useState } from 'react';
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
import { Genders } from '../services/types/user';
import { UNITS } from '../services/constants/global';
import { EnumHorizontalPosition } from '../services/types/global';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import { useAppSelector } from '../services/hooks/store';

export default function SettingsScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const onSubmit = handleSubmit((submitData: FieldValues) => submitData);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: EResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  const currentUser = useAppSelector((state) => state.user.user);

  const resetLimit = () => {
    setResponse({
      status: EResponseStatuses.success,
      message: t('settings.form.res.successReset')
    });
  };
  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('settings.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
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
            {t('settings.form.btnSave')}
          </Button>
          <Button
            onClick={resetLimit}
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
