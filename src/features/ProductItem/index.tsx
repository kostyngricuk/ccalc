import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectedProduct } from 'types/products';
import { UNITS } from 'constants/global';
import { useAppDispatch } from 'hooks/store';
import { removeProduct, updateProductWeight } from 'store/slices/productSlice';
import { CloseSVG } from 'icons/index';
import { Input } from 'components/Input'
import Title from 'components/Title'
import Icon from 'components/Icon'
import { StyledProductItem, StyledRemoveProductButton } from './StyledProductItem';

export default function ProductItem({
  item
}: {
  item: ISelectedProduct
}) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();


  const removeProductFromList = (itemId: number) => {
    dispatch({
      type: removeProduct.type,
      payload: {
        id: itemId
      }
    });
  }

  const changeWeight = (value: string) => {
    dispatch({
      type: updateProductWeight.type,
      payload: {
        id: item.id,
        newWeight: parseInt(value, 10)
      }
    });
  }

  const {
    id,
    name,
    kkal,
    proto,
    fats,
    carbo,
    weight
  } = item;

  return (
    <StyledProductItem>
      <div>
        <Title variant='h3'>{name}</Title>
        <p><strong>{t('calculator.item.nutrients')} :</strong> {proto}/{fats}/{carbo}</p>
        <p><strong>{t('calculator.item.colories')} :</strong> {kkal}</p>
      </div>
      <Input
        units={t(`units.${UNITS.g}`)}
        name="weight"
        value={weight.toString()}
        label={t('form.field.weight')}
        type='number'
        onChange={(value: string) => changeWeight(value)}
      />
      <StyledRemoveProductButton
        $isIcon
        $isOutline
        ariaLabel={t('calculator.item.remove')}
        onClick={() => removeProductFromList(id)}
      >
        <Icon sprite={CloseSVG} />
      </StyledRemoveProductButton>
    </StyledProductItem>
  )
}
