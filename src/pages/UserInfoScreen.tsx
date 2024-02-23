import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import paths from '../services/router/paths';
import useAuth from '../services/hooks/useAuth';
import { EnumHorizontalPosition } from '../types/global';
import { UNITS } from '../services/constants/global';
import { Genders } from '../types/user';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Form from '../components/UI/Form/Form';
import { TResponse, TResponseStatuses } from '../components/UI/Form/types';
import FormField, { EnumFormFieldType } from '../components/UI/FormField/FormField';
import { EnumInputType, Input, InputControlled } from '../components/UI/Input/Input';
import Button, { EnumButtonType } from '../components/UI/Button/Button';

export default function UserInfoScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { user } = useAuth();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const onSubmit = handleSubmit((submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: TResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  if (!user) {
    navigate(paths.signin.url);
  }

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('userInfo.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
        <FormField>
          <Controller
            name="gender"
            control={control}
            defaultValue={user?.gender}
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
          <InputControlled
            type={EnumInputType.number}
            value={user?.age?.toString()}
            name="age"
            label={t('form.field.age')}
            control={control}
          />
        </FormField>
        <FormField>
          <InputControlled
            type={EnumInputType.number}
            value={user?.height?.toString()}
            name="height"
            label={t('form.field.height')}
            control={control}
            units={t(`units.${UNITS.sm}`)}
          />
        </FormField>
        <FormField>
          <InputControlled
            type={EnumInputType.number}
            value={user?.weight?.toString()}
            name="weight"
            label={t('form.field.weight')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <FormField>
          <InputControlled
            type={EnumInputType.number}
            value={user?.weightGoal?.toString()}
            name="weightGoal"
            label={t('form.field.weightGoal')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('userInfo.form.btnSubmit')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
