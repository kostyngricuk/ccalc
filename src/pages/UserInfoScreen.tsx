import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { EnumHorizontalPosition } from 'types/global';
import { UNITS } from 'constants/global';
import { Genders } from 'types/user';

import Section from 'components/Section'
import Title from 'components/Title'
import Form from 'components/Form'
import { TResponse, EResponseStatuses } from 'components/Form/types'
import FormField, { EnumFormFieldType } from 'components/FormField'
import { Input, InputControlled } from 'components/Input'
import Button, { EnumButtonType } from 'components/Button'
import { selectCurrentUser, selectIsLoading } from 'hooks/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { updateRequest } from 'store/slices/userSlice';
import hasAdditionalInfo from 'utils/auth';
import paths from 'router/paths';

export default function UserInfoScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const isLoading = useAppSelector(selectIsLoading);
  const currentUser = useAppSelector(selectCurrentUser)

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    const {
      gender,
      age,
      height,
      weight,
      weightGoal
    } = submitData;

    dispatch({
      type: updateRequest.type,
      payload: {
        gender,
        age,
        height,
        weight,
        weightGoal,
        email: currentUser?.email
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
      navigate(paths.home.path);
    }
  }, [currentUser]);

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('userInfo.title')}</Title>
      <Form onSubmit={onSubmit} response={response} isLoading={isLoading}>
        <FormField>
          <Controller
            name="gender"
            control={control}
            defaultValue={Genders.man}
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
          <InputControlled
            isFullwidth
            type='number'
            value={currentUser?.age?.toString()}
            name="age"
            required
            label={t('form.field.age')}
            control={control}
          />
        </FormField>
        <FormField>
          <InputControlled
            isFullwidth
            type='number'
            value={currentUser?.height?.toString()}
            name="height"
            required
            label={t('form.field.height')}
            control={control}
            units={t(`units.${UNITS.sm}`)}
          />
        </FormField>
        <FormField>
          <InputControlled
            isFullwidth
            type='number'
            value={currentUser?.weight?.toString()}
            name="weight"
            required
            label={t('form.field.weight')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <FormField>
          <InputControlled
            isFullwidth
            type='number'
            value={currentUser?.weightGoal?.toString()}
            name="weightGoal"
            required
            label={t('form.field.weightGoal')}
            control={control}
            units={t(`units.${UNITS.kg}`)}
          />
        </FormField>
        <FormField type={EnumFormFieldType.actions}>
          <Button type={EnumButtonType.submit}>
            {t('userInfo.form.btn.submit')}
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
