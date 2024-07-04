import React from "react";
import { ISelectedProduct, KEY_PRODUCT_ID, TProducts } from "types/products";
import { defaultMockUser, fireEvent, render } from "utils/test-utils";
import CalculatorResult from "features/CalculatorResult";

describe('Render CalculatorResult Component', () => {
  let mockProducts: TProducts;
  let mockSelectedProducts: ISelectedProduct[];
  beforeEach(() => {
    mockProducts = [
      {
        [KEY_PRODUCT_ID]: 0,
        name: 'Milk',
        kkal: 34,
        proto: 1,
        carbo: 3,
        fats: 2,
      }
    ];
    mockSelectedProducts = [
      {
        [KEY_PRODUCT_ID]: 0,
        name: 'Milk',
        kkal: 34,
        proto: 1,
        carbo: 3,
        fats: 2,
        weight: 100,
      }
    ];
  })

  it('has selected products and click on save results', () => {
    const state = {
      user: {
        user: defaultMockUser,
        isLoading: false,
      },
      product: {
        items: mockProducts,
        selectedItems: mockSelectedProducts
      }
    }
    const wrapper = render(<CalculatorResult />, {
      preloadedState: state
    });

    const saveBtn = wrapper.getByRole('button');
    expect(saveBtn).toBeInTheDocument();

    fireEvent.click(saveBtn);
  })

  it('no selected products', () => {
    const state = {
      product: {
        items: mockProducts,
        selectedItems: []
      }
    }
    const wrapper = render(<CalculatorResult />, {
      preloadedState: state
    });
    const saveBtn = wrapper.queryByRole('button');
    expect(saveBtn).not.toBeInTheDocument();

    const element = wrapper.queryByRole('paragraph');
    expect(element).toBeInTheDocument();
  })
})