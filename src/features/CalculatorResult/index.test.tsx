import React from "react";
import { defaultMockProduct, defaultMockSelectedProduct, defaultMockUser, fireEvent, render } from "utils/test-utils";
import CalculatorResult from "features/CalculatorResult";

describe('Render CalculatorResult Component', () => {
  it('has selected products and click on save results', () => {
    const state = {
      user: {
        user: defaultMockUser,
        isLoading: false,
      },
      product: {
        items: [defaultMockProduct],
        selectedItems: [defaultMockSelectedProduct]
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
        items: [defaultMockProduct],
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