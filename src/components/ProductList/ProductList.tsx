import React from "react";
import { IProduct } from "../../services/types/products";

import ProductItem from "../ProductItem/ProductItem";
import StyledProductList from "./StyledProductList";
import { useAppSelector } from "../../services/hooks/store";
import { selectProductSelectedItems } from "../../services/hooks/selectors";

export default function ProductList() {
  const selectedSelectedProducts = useAppSelector(selectProductSelectedItems);

  return (
    <StyledProductList>
      {
        selectedSelectedProducts.map((item: IProduct) => (
          <ProductItem item={item} key={item.id}/>
        ))
      }
    </StyledProductList>
  )
}