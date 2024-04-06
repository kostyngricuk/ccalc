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
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import { EnumHorizontalPosition } from '../services/types/global';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import { TProducts } from '../services/types/products';

const products = [
  {
    id: 0,
    name: "Milk",
    kkal: 1,
    proto: 2,
    fats: 3,
    carbo: 4
  },
  {
    id: 1,
    name: "Beef",
    kkal: 1,
    proto: 2,
    fats: 3,
    carbo: 4
  },
  {
    id: 2,
    name: "Potato",
    kkal: 1,
    proto: 2,
    fats: 3,
    carbo: 4
  },
] as TProducts;

export default function CalculatorScreen() {
  const [selectedProducts, setSelectedProducts] = useState<TProducts>([]);
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


  const productOptions = products.map((el) => {
    const option = {
      label: el.name,
      value: el.id
    }
    return option;
  });

  const onChangeSelectProduct = (optionValue: string) => {
    const productId = parseInt(optionValue, 10);
    const selectedItem = products.find((el) => el.id === productId);
    if (selectedItem) {
      setSelectedProducts([...selectedProducts, selectedItem]);
    }
  }

  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts])

  return (
    <Section>
      <Title position={EnumHorizontalPosition.center}>{t('calculator.title')}</Title>
      <Form onSubmit={onSubmit} response={response}>
        <FormField type={EnumFormFieldType.row}>
          <InputControlled
            type={EnumInputType.select}
            options={productOptions}
            value=""
            name="products"
            label={t('form.field.selectProduct')}
            control={control}
            onChangeTrigger={onChangeSelectProduct}
          />
          <Button type={EnumButtonType.submit} ariaLabel={t('calculator.form.btn.add')}>
            +
          </Button>
        </FormField>
      </Form>
    </Section>
  );
}
