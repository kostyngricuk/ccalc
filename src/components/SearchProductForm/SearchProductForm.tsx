import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { differenceBy } from "lodash";

import Title from '../UI/Title/Title';
import Button, { EnumButtonColor, EnumButtonType } from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import FormField, {
  EnumFormFieldType,
} from '../UI/FormField/FormField';
import { EnumInputType, InputControlled } from '../UI/Input/Input';
import { EnumHorizontalPosition, EnumTitleVariant } from '../../services/types/global';
import { TResponse, EResponseStatuses } from '../UI/Form/types';
import { useAppDispatch, useAppSelector } from '../../services/hooks/store';
import { selectProductItems, selectProductSelectedItems } from '../../services/hooks/selectors';
import { addCustomProduct, addProduct, getProducts } from '../../services/reducers/productSlice';
import Modal from '../UI/Modal/Modal';
import { IProduct } from '../../services/types/products';
import { getKkal } from '../../services/utils/calculations';

export default function SearchProductForm() {
  const [response, setResponse] = useState<TResponse>(null);
  const [isActiveModal, setIsActiveModal] = useState<Boolean>(false);
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

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<FieldValues>();

  const onSubmit = handleSubmit(async (submitData: FieldValues) => {
    if (!submitData) {
      return;
    }

    const {
      name,
      proto,
      carbo,
      fats
    } = submitData;

    const product = {
      id: diffProducts.length + selectedProducts.length,
      name,
      proto,
      carbo,
      fats,
      kkal: getKkal({
        proto,
        carbo,
        fats,
      })
    } as IProduct;

    dispatch({
      type: addCustomProduct.type,
      payload: product
    });

    reset();
    setIsActiveModal(false)
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setResponse({
        status: EResponseStatuses.error,
        errors
      });
    }
  }, [errors]);

  const showModal = () => setIsActiveModal(true);
  const closeModal = () => setIsActiveModal(false);

  return (
    <>
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
        <span>{ t('calculator.form.or') }</span>
        <Button
          type={EnumButtonType.button} ariaLabel={t('calculator.form.btn.add')}
          onClick={showModal}
        >
          { t('calculator.form.btn.add') }
        </Button>
      </FormField>
        <Modal isActive={isActiveModal} onClose={closeModal}>
          <Title position={EnumHorizontalPosition.center} variant={EnumTitleVariant.h3}>{t('calculator.newProductForm.title')}</Title>
          <Form onSubmit={onSubmit} response={response}>
            <InputControlled
              required
              name="name"
              label={t('form.field.productTitle')}
              control={control}
            />
            <FormField type={EnumFormFieldType.row}>
              <InputControlled
                required
                type={EnumInputType.number}
                name="proto"
                label={t('units.proto')}
                control={control}
              />
              <InputControlled
                required
                type={EnumInputType.number}
                name="fats"
                label={t('units.fats')}
                control={control}
              />
              <InputControlled
                required
                type={EnumInputType.number}
                name="carbo"
                label={t('units.carbo')}
                control={control}
              />
            </FormField>
            <FormField type={EnumFormFieldType.actions}>
              <Button
                color={EnumButtonColor.red}
                $isOutline
                onClick={() => setIsActiveModal(false)}
              >
                {t('calculator.newProductForm.btn.cancel')}
              </Button>
              <Button type={EnumButtonType.submit}>
                {t('calculator.newProductForm.btn.submit')}
              </Button>
            </FormField>
          </Form>
        </Modal>
    </>
  )
}