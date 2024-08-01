import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { differenceBy } from 'lodash';

import { useAppDispatch, useAppSelector } from 'hooks/store';
import { selectProductItems, selectProductSelectedItems } from 'hooks/selectors';
import { addProduct, getProducts } from 'store/slices/productSlice';
import { KEY_PRODUCT_ID } from 'types/products';
import Button, { EnumButtonType } from 'components/Button'
import FormField, {
  EnumFormFieldType,
} from 'components/FormField'
import { InputControlled } from 'components/Input'
import { ISelectOption } from 'components/Select/types'
import { FieldValues, useForm } from 'react-hook-form';
import ModalAddCustomProduct from 'features/ModalCustomProduct';

export default function SearchProductForm() {
  const [isActiveModal, setIsActiveModal] = useState<Boolean>(false);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: getProducts.type,
    });
  }, []);

  const { control } = useForm<FieldValues>();

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

  const toggleModal = () => setIsActiveModal((prevState) => !prevState)

  return (
    <>
      <FormField type={EnumFormFieldType.row}>
        <InputControlled
          type='select'
          options={productOptions}
          value=""
          name="products"
          control={control}
          label={t('form.field.selectProduct')}
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
      {isActiveModal && <ModalAddCustomProduct toggleModal={toggleModal}/>}
    </>
  )
}