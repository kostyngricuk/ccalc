import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';

import Section from '../components/UI/Section/Section';
import Title from '../components/UI/Title/Title';
import Button, { EnumButtonType } from '../components/UI/Button/Button';
import Form from '../components/UI/Form/Form';
import FormField, {
  EnumFormFieldType,
} from '../components/UI/FormField/FormField';
import { InputControlled } from '../components/UI/Input/Input';
import { EnumHorizontalPosition } from '../services/types/global';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';

export default function CalculatorScreen() {
  const [response, setResponse] = useState<TResponse>(null);
  const { t } = useTranslation();

  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }
    setResponse({
      status: EResponseStatuses.success,
      message: 'Success'
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
      <Title position={EnumHorizontalPosition.center}>{t('calculator.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
        <FormField type={EnumFormFieldType.row}>
          <InputControlled
            value=""
            name="age"
            label={t('form.field.selectProduct')}
            control={control}
          />
          <Button type={EnumButtonType.submit} ariaLabel={t('calculator.form.btn.add')}>
            +
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
