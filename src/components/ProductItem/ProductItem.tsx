import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { IProduct } from "../../services/types/products";
import StyledProductItem from "./StyledProductItem";
import Title from "../UI/Title/Title";
import { EnumInputType, Input } from "../UI/Input/Input";
import { UNITS } from "../../services/constants/global";
import { EnumTitleVariant } from "../../services/types/global";

export default function ProductItem({
  item
}: {
  item: IProduct
}) {
  const [weigh, setWeight] = useState<number>(100);
  const [carbo, setCarbo] = useState<number>(item.carbo);
  const [fats, setFats] = useState<number>(item.fats);
  const [proto, setProto] = useState<number>(item.proto);
  const [kkal, setKkal] = useState<number>(item.kkal);
  const { t } = useTranslation();

  useEffect(() => {
    if (!weigh) {
      return;
    }
    setCarbo(item.carbo / 100 * weigh);
    setFats(item.fats / 100 * weigh);
    setProto(item.proto / 100 * weigh);
    setKkal(item.kkal / 100 * weigh);
  }, [weigh])

  return (
    <StyledProductItem>
      <div>
        <Title variant={EnumTitleVariant.h3}>{item.name}</Title>
        <p><strong>P / F / C :</strong> {proto}/{fats}/{carbo}</p>
        <p><strong>Сalories :</strong> {kkal}</p>
      </div>
      <Input
        units={t(`units.${UNITS.g}`)}
        name="weight"
        value={weigh.toString()}
        label={t('form.field.weight')}
        type={EnumInputType.number}
        onChange={(value: string) => setWeight(parseInt(value, 10))}
      />
    </StyledProductItem>
  )
}
