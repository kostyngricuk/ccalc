import React from "react";
import { fireEvent, render, waitFor } from "utils/test-utils";
import SearchProductForm from "features/SearchProductForm";
import { KEY_PRODUCT_ID } from "types/products";
import { defaultMockProduct, defaultMockSelectedProduct, defaultMockUser } from "constants/mocks";

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
  it('Should render with default props', () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');
    expect(addCustomProductBtn).toBeInTheDocument();
  })

  it('Should make a spanshot', () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    expect(wrapper).toMatchSnapshot();
  })

  it('Should have add custom product button', () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');
    expect(addCustomProductBtn).toBeInTheDocument();
  })

  it('Should work with callback on add custom product button', async () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');

    const mockOnClick = jest.fn();
    addCustomProductBtn.addEventListener('click', mockOnClick);
    fireEvent.click(addCustomProductBtn);
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    })
  })

  it('Should have a select input', () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const selectInput = wrapper.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();
  })

  it('Should change value of select the product', async () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const selectInput = wrapper.getByRole('combobox');

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

  it('Should show modal form and submit', async () => {
    const wrapper = render(<SearchProductForm />, {
      preloadedState: state
    });
    const addCustomProductBtn = wrapper.getByRole('button');

    fireEvent.click(addCustomProductBtn);
    await waitFor(() => {
      const modalForm = wrapper.getByTestId('form');
      expect(modalForm).toBeInTheDocument();
    })
  })
})