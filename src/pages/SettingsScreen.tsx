import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm, Controller } from 'react-hook-form';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Button from '../components/UI/Button/Button';
import Form from '../components/UI/Form/Form';
import FormField, {
  EnumFormFieldType,
} from '../components/UI/FormField/FormField';
import { EnumInputType, Input, InputControlled } from '../components/UI/Input/Input';
import AuthContext from '../services/contexts';
import { Genders, IAuthContext } from '../types/user';
import calcDailyLimit from '../services/utils/calculations';
import { UNITS } from '../services/constants/global';
import { EnumHorizontalPosition } from '../types/global';

export default function SettingsScreen() {
  const [data, setData] = useState<FieldValues | null>(null);
  const [resMessage, setResMessage] = useState<string>('');
  const { t } = useTranslation();
  const { currentUser, setCurrentUser } = useContext<IAuthContext>(AuthContext);

  const { handleSubmit, control } = useForm<FieldValues>();

  const onSubmit = handleSubmit((submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    setData(submitData);
    setResMessage(t('settings.form.res.success'));
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const {
      oldPassword,
      newPassword,
      confirmNewPassword,
      ...userData
    } = data; // excluding properties
    setCurrentUser({
      ...userData,
      calorieWidget: {
        limit: calcDailyLimit({
          height: parseInt(userData.height, 10),
          weightGoal: parseInt(userData.weightGoal, 10),
          age: parseInt(userData.age, 10),
          gender: userData.gender,
        }),
        eaten: currentUser?.calorieWidget?.eaten,
      },
    });
  }, [data, setCurrentUser, currentUser?.calorieWidget?.eaten]);

  useEffect(() => {
    if (resMessage.length) {
      const timeout = setTimeout(() => {
        setResMessage('');
      }, 3000);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [resMessage]);

  const resetLimit = () => {
    setCurrentUser({
      ...currentUser,
      calorieWidget: {
        ...currentUser?.calorieWidget,
        eaten: 0,
      },
    });
    setResMessage(t('settings.form.res.successReset'));
  };

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('settings.title')}</Title>
      <Form onSubmit={onSubmit} resMessage={resMessage}>
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
                  label={t('form.field.gender.man')}
                  error={fieldState?.error}
                  onChange={field.onChange}
                  checked={field.value === Genders.man}
                />
                <Input
                  name={field.name}
                  type={EnumInputType.radio}
                  value={Genders.woman}
                  label={t('form.field.gender.woman')}
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
              label={t('settings.form.field.age')}
              control={control}
            />
            <InputControlled
              type={EnumInputType.number}
              value={currentUser?.height?.toString()}
              name="height"
              label={t('settings.form.field.height')}
              control={control}
              units={t(`units.${UNITS.sm}`)}
            />
            <InputControlled
              type={EnumInputType.number}
              value={currentUser?.weight?.toString()}
              name="weight"
              label={t('settings.form.field.weight')}
              control={control}
              units={t(`units.${UNITS.kg}`)}
            />
          </FormField>
          <InputControlled
            type={EnumInputType.number}
            value={currentUser?.weightGoal?.toString()}
            name="weightGoal"
            label={t('settings.form.field.weightGoal')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <InputControlled
          type={EnumInputType.email}
          value={currentUser?.email}
          name="email"
          label={t('settings.form.field.email')}
          required
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="oldPassword"
          value=""
          label={t('settings.form.field.oldPassword')}
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="newPassword"
          value=""
          label={t('settings.form.field.newPassword')}
          control={control}
        />
        <InputControlled
          type={EnumInputType.password}
          name="confirmNewPassword"
          value=""
          label={t('settings.form.field.confirmNewPassword')}
          control={control}
        />
        <FormField type={EnumFormFieldType.actions}>
          <Button type="submit">{t('settings.form.btnSave')}</Button>
          <Button
            type="button"
            onClick={resetLimit}
            color="red"
            $isOutline
          >
            {t('settings.form.btnResetWidget')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
