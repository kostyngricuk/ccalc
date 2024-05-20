import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { differenceBy } from "lodash";

import Title from '../components/UI/Title/Title';
import Button, { EnumButtonType } from '../components/UI/Button/Button';
import Form from '../components/UI/Form/Form';
import FormField, {
  EnumFormFieldType,
} from '../components/UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../components/UI/Input/Input';
import { EnumHorizontalPosition, EnumTitleVariant } from '../services/types/global';
import { TResponse, EResponseStatuses } from '../components/UI/Form/types';
import ProductList from '../components/ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../services/hooks/store';
import { selectProductItems, selectProductSelectedItems } from '../services/hooks/selectors';
import { addProduct, getProducts } from '../services/reducers/productSlice';
import Columns from '../components/UI/Columns/Columns';

const SearchProductForm = React.memo(
  () => {
    const [response, setResponse] = useState<TResponse>(null);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch({
        type: getProducts.type,
      });
    }, []);

    const allProducts = useAppSelector(selectProductItems);
    const selectedProducts = useAppSelector(selectProductSelectedItems);

    const diffProducts = differenceBy(allProducts, selectedProducts, 'id');
    const productOptions = diffProducts.map((el) => {
      const option = {
        label: el.name,
        value: el.id
      }
      return option;
    });

    const onChangeSelectProduct = (optionValue: string) => {
      dispatch({
        type: addProduct.type,
        payload: {
          id: parseInt(optionValue, 10)
        }
      });
    }

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
          <Button type={EnumButtonType.button} ariaLabel={t('calculator.form.btn.add')}>
            +
          </Button>
        </FormField>
      </Form>
    )
  }
)

export default function CalculatorScreen() {
  const { t } = useTranslation();

  return (
    <Columns>
      <div>
        <Title position={EnumHorizontalPosition.center} variant={EnumTitleVariant.h2}>{t('calculator.form.title')}</Title>
        <SearchProductForm />
        <ProductList />
      </div>
      <div style={{backgroundColor: 'var(--color-lightgreen)'}}>
        <Title position={EnumHorizontalPosition.center} variant={EnumTitleVariant.h2}>{t('calculator.res.title')}</Title>
      </div>
    </Columns>
  );
}
