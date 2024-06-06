import React from "react";
import { useTranslation } from "react-i18next";

import { ISelectedProduct } from "../../services/types/products";
import { StyledProductItem, StyledRemoveProductButton } from "./StyledProductItem";
import Title from "../UI/Title/Title";
import { EnumInputType, Input } from "../UI/Input/Input";
import { UNITS } from "../../services/constants/global";
import { EnumTitleVariant } from "../../services/types/global";
import { useAppDispatch } from "../../services/hooks/store";
import { removeProduct, updateProductWeight } from "../../services/reducers/productSlice";
import { CloseSVG } from "../../icons";
import Icon from "../UI/Icon/Icon";

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
        <Title variant={EnumTitleVariant.h3}>{name}</Title>
        <p><strong>{t('calculator.item.nutrients')} :</strong> {proto}/{fats}/{carbo}</p>
        <p><strong>{t('calculator.item.colories')} :</strong> {kkal}</p>
      </div>
      <Input
        units={t(`units.${UNITS.g}`)}
        name="weight"
        value={weight.toString()}
        label={t('form.field.weight')}
        type={EnumInputType.number}
        onChange={(value: string) => changeWeight(value)}
      />
      <StyledRemoveProductButton
        $isIcon
        $isOutline
        ariaLabel={t('calculator.item.remove')}
        onClick={() => removeProductFromList(id)}
      >
        <Icon Sprite={CloseSVG} />
      </StyledRemoveProductButton>
    </StyledProductItem>
  )
}
