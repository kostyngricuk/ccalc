import React from 'react';
import { ISelectedProduct } from '@services/types/products';

import { useAppSelector } from '@services/hooks/store';
import { selectProductSelectedItems } from '@services/hooks/selectors';
import ProductItem from '@features/ProductItem'
import StyledProductList from './StyledProductList';

export default function ProductList() {
  const selectedProducts = useAppSelector(selectProductSelectedItems);

  return (
    <StyledProductList>
      {
        selectedProducts.map((item: ISelectedProduct) => (
          <ProductItem item={item} key={item.id}/>
        ))
      }
    </StyledProductList>
  )
}