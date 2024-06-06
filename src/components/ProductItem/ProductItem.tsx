import React, { useEffect, useState } from "react";
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
  const [carbo, setCarbo] = useState<number>(item.carbo);
  const [fats, setFats] = useState<number>(item.fats);
  const [proto, setProto] = useState<number>(item.proto);
  const [kkal, setKkal] = useState<number>(item.kkal);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();


  useEffect(() => {
    setCarbo(parseFloat((item.carbo / 100 * item.weight).toFixed(2)));
    setFats(parseFloat((item.fats / 100 * item.weight).toFixed(2)));
    setProto(parseFloat((item.proto / 100 * item.weight).toFixed(2)));
    setKkal(parseFloat((item.kkal / 100 * item.weight).toFixed(2)));
  }, [item.weight]);

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
        weight: parseInt(value, 10)
      }
    });
  }

  return (
    <StyledProductItem>
      <div>
        <Title variant={EnumTitleVariant.h3}>{item.name}</Title>
        <p><strong>{t('calculator.item.nutrients')} :</strong> {proto}/{fats}/{carbo}</p>
        <p><strong>{t('calculator.item.colories')} :</strong> {kkal}</p>
      </div>
      <Input
        units={t(`units.${UNITS.g}`)}
        name="weight"
        value={item.weight.toString()}
        label={t('form.field.weight')}
        type={EnumInputType.number}
        onChange={(value: string) => changeWeight(value)}
      />
      <StyledRemoveProductButton
        $isIcon
        $isOutline
        ariaLabel={t('calculator.item.remove')}
        onClick={() => removeProductFromList(item.id)}
      >
        <Icon Sprite={CloseSVG} />
      </StyledRemoveProductButton>
    </StyledProductItem>
  )
}
