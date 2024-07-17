import React from "react";
import { defaultMockProduct, defaultMockSelectedProduct, defaultMockUser, fireEvent, render, waitFor } from "utils/test-utils";
import SearchProductForm from "features/SearchProductForm";
import { KEY_PRODUCT_ID } from "types/products";

describe('Search Product Form', () => {
  const state = {
    user: {
      user: defaultMockUser,
      isLoading: false,
    },
    product: {
      items: [
        defaultMockProduct,
        {
          [KEY_PRODUCT_ID]: 1,
          name: 'Bread',
          kkal: 50,
          proto: 12,
          carbo: 13,
          fats: 22,
        }
      ],
      selectedItems: [defaultMockSelectedProduct]
    }
  }
  it('Render with default props', () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');
    expect(addCustomProductBtn).toBeInTheDocument();
  })

  it('Click on add custom product', async () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');
    expect(addCustomProductBtn).toBeInTheDocument();

    const mockOnClick = jest.fn();
    addCustomProductBtn.addEventListener('click', mockOnClick);
    fireEvent.click(addCustomProductBtn);
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    })
  })

  it('Change Select', async () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const selectInput = wrapper.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();

    const mockOnChange = jest.fn();
    selectInput.addEventListener('keydown', mockOnChange);
    fireEvent.focus(selectInput);
    fireEvent.keyDown(selectInput, { key: 'ArrowDown', code: 40 });
    await waitFor(() => {
      const targetOption = wrapper.getByText('Bread');
      fireEvent.click(targetOption);
    })

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  })

  it('Show modal form and submit', async () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');
    expect(addCustomProductBtn).toBeInTheDocument();

    fireEvent.click(addCustomProductBtn);
    await waitFor(() => {
      const modalForm = wrapper.getByTestId('form');
      expect(modalForm).toBeInTheDocument();

      const mockOnSubmit = jest.fn();
      modalForm.addEventListener('submit', mockOnSubmit);
      fireEvent.submit(wrapper.getByText('Cancel'));
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    })
  })
})