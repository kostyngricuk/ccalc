import React from "react";
import { fireEvent, render, waitFor } from "utils/test-utils";
import ModalAddCustomProduct from "features/ModalCustomProduct";
import { defaultMockProduct, defaultMockSelectedProduct } from "constants/mocks";

describe('Test ModalCustomProduct component', () => {
  const mockToggleModal = jest.fn();
  const state = {
    product: {
      items: [defaultMockProduct],
      selectedItems: [defaultMockSelectedProduct]
    }
  }

  it('Should render component with default props', () => {
    const wrapper = render(<ModalAddCustomProduct toggleModal={mockToggleModal}/>, {
      preloadedState: state
    });
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();
  })

  it('Should make snapshot', () => {
    const wrapper = render(<ModalAddCustomProduct toggleModal={mockToggleModal}/>, {
      preloadedState: state
    });
    const form = wrapper.getByTestId('form');
    expect(form).toMatchSnapshot();
  })

  it('Should submit form with submit callback', async () => {
    const wrapper = render(<ModalAddCustomProduct toggleModal={mockToggleModal}/>, {
      preloadedState: state
    });
    const form = wrapper.getByTestId('form');

    const mockSubmitCallback = jest.fn();

    form.addEventListener('submit', mockSubmitCallback);

    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockSubmitCallback).toHaveBeenCalled();
    })
  })

  it('Should change value for input', async () => {
    const wrapper = render(<ModalAddCustomProduct toggleModal={mockToggleModal}/>, {
      preloadedState: state
    });

    const protoInput = wrapper.getByLabelText("Proteins");

    fireEvent.input(protoInput, {
      target: {
        value: 200
      }
    });

    await waitFor(() => {
      expect(protoInput).toHaveValue(200);
    })
  })
})