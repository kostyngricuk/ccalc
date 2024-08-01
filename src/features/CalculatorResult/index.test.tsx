import React from "react";
import {render } from "utils/test-utils";
import CalculatorResult from "features/CalculatorResult";
import { defaultMockProduct, defaultMockSelectedProduct, defaultMockUser } from "constants/mocks";

describe('Render CalculatorResult Component', () => {
  it('Should render with selected products', () => {
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
  })

  it('Should render without selected products', () => {
    const state = {
      product: {
        items: [defaultMockProduct],
        selectedItems: []
      }
    }
    const wrapper = render(<CalculatorResult />, {
      preloadedState: state
    });
    const element = wrapper.getByRole('paragraph');
    expect(element).toBeInTheDocument();
  })
})