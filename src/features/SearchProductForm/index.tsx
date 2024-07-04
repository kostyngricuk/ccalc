import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { differenceBy } from 'lodash';

import { EnumHorizontalPosition } from 'types/global';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { selectProductItems, selectProductSelectedItems } from 'hooks/selectors';
import { addCustomProduct, addProduct, getProducts } from 'store/slices/productSlice';
import { IProduct, KEY_PRODUCT_ID } from 'types/products';
import { getKkal } from 'utils/calculations';
import Title from 'components/Title'
import Button, { EnumButtonColor, EnumButtonType } from 'components/Button'
import Form from 'components/Form'
import FormField, {
  EnumFormFieldType,
} from 'components/FormField'
import { InputControlled } from 'components/Input'
import { TResponse, EResponseStatuses } from 'components/Form/types'
import Modal from 'components/Modal'
import { ISelectOption } from 'components/Select/types'

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

  const toggleModal = () => setIsActiveModal((prevState) => !prevState)

  const allProducts = useAppSelector(selectProductItems);
  const selectedProducts = useAppSelector(selectProductSelectedItems);

  const diffProducts = differenceBy(allProducts, selectedProducts, KEY_PRODUCT_ID);
  const productOptions: ISelectOption[] = diffProducts.map((el) => (
    {
      label: el.name,
      value: el.id.toString()
    }
  ));

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

  const onSubmit = handleSubmit((submitData: FieldValues) => {
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
      proto: parseInt(proto, 10),
      carbo: parseInt(carbo, 10),
      fats: parseInt(fats, 10),
      kkal: getKkal({
        proto: parseInt(proto, 10),
        carbo: parseInt(carbo, 10),
        fats: parseInt(fats, 10),
      })
    } as IProduct;

    dispatch({
      type: addCustomProduct.type,
      payload: product
    });

    reset();
    toggleModal()
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
    <>
      <FormField type={EnumFormFieldType.row}>
        <InputControlled
          type='select'
          options={productOptions}
          value=""
          name="products"
          label={t('form.field.selectProduct')}
          control={control}
          onChangeTrigger={onChangeSelectProduct}
        />
        <span>{ t('calculator.form.or') }</span>
        <Button
          type={EnumButtonType.button}
          ariaLabel={t('calculator.form.btn.add')}
          onClick={toggleModal}
        >
          { t('calculator.form.btn.add') }
        </Button>
      </FormField>
        <Modal isActive={isActiveModal} onClose={toggleModal}>
          <Title position={EnumHorizontalPosition.center} variant='h3'>{t('calculator.newProductForm.title')}</Title>
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
                type='number'
                name="proto"
                label={t('units.proto')}
                control={control}
              />
              <InputControlled
                required
                type='number'
                name="fats"
                label={t('units.fats')}
                control={control}
              />
              <InputControlled
                required
                type='number'
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