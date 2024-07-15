import React from "react";
import { defaultMockSelectedProduct, fireEvent, render, waitFor } from "utils/test-utils";
import ProductItem from "features/ProductItem";

describe('Product Item', () => {
  it('Render with default props', () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);

    expect(wrapper.getByRole('heading')).toHaveTextContent(defaultMockSelectedProduct.name);
  })

  it('Remove product item', async () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);

    const removeBtn = wrapper.getByRole('button');
    expect(removeBtn).toBeInTheDocument();

    const mockOnClickRemove = jest.fn();
    removeBtn.addEventListener('click', mockOnClickRemove);
    fireEvent.click(removeBtn);
    await waitFor(() => {
      expect(mockOnClickRemove).toHaveBeenCalledTimes(1);
    })
  })

  it('Change product item weight', async () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);

    const weightInput = wrapper.getByRole('spinbutton');
    expect(weightInput).toBeInTheDocument();

    const mockOnChangeWeight = jest.fn();
    weightInput.addEventListener('change', mockOnChangeWeight);
    fireEvent.change(weightInput, {
      target: {
        value: "200"
      }
    })
    await waitFor(() => {
      expect(mockOnChangeWeight).toHaveBeenCalledTimes(1);
    })
  })
})