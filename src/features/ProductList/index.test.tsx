import React from "react";
import ProductList from "features/ProductList";
import { defaultMockProduct, defaultMockSelectedProduct, render } from "utils/test-utils";

it('Render ProductList comnponent', () => {
  const state = {
    product: {
      items: [defaultMockProduct],
      selectedItems: [defaultMockSelectedProduct]
    }
  }
  const wrapper = render(<ProductList />, {
    preloadedState: state
  });
  expect(wrapper.getByText(defaultMockSelectedProduct.name)).toBeInTheDocument();
})