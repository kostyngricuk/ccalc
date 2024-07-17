import React from "react";
import { defaultMockProduct, defaultMockSelectedProduct, fireEvent, render, waitFor } from "utils/test-utils";
import ModalAddCustomProduct from "features/ModalCustomProduct";

describe('Test ModalCustomProduct component', () => {
  const mockToggleModal = jest.fn();
  const state = {
    product: {
      items: [defaultMockProduct],
      selectedItems: [defaultMockSelectedProduct]
    }
  }

  it('Render component', () => {
    const wrapper = render(<ModalAddCustomProduct toggleModal={mockToggleModal}/>, {
      preloadedState: state
    });
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();
  })

  it('Change value for input', async () => {
    const wrapper = render(<ModalAddCustomProduct toggleModal={mockToggleModal}/>, {
      preloadedState: state
    });
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();

    const protoInput = wrapper.getByLabelText("Proteins");

    fireEvent.input(protoInput, {
      target: {
        value: 200
      }
    });

    expect(protoInput).toHaveValue(200);
  })
})