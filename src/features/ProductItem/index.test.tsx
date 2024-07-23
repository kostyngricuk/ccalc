import React from "react";
import { render } from "utils/test-utils";
import ProductItem from "features/ProductItem";
import { defaultMockSelectedProduct } from "constants/mocks";

describe('Product Item', () => {
  it('Should render with default props', () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);

    expect(wrapper.getByRole('heading')).toHaveTextContent(defaultMockSelectedProduct.name);
  })

  it('Should make a snapshot', () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should have a remove product button', async () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);

    const removeBtn = wrapper.getByRole('button');
    expect(removeBtn).toBeInTheDocument();
  })

  it('Should have input for changing waight', async () => {
    const wrapper = render(<ProductItem item={defaultMockSelectedProduct} />);

    const weightInput = wrapper.getByRole('spinbutton');
    expect(weightInput).toBeInTheDocument();
  })
})