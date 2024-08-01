import React from 'react';
import { fireEvent, render } from 'utils/test-utils';
import Modal from 'components/Modal';

describe('Test render component - Modal', () => {
  it('was rendered', () => {
    const wrapper = render(<Modal isActive onClose={() => {}}>Content</Modal>);
    const modalEl = wrapper.getByText('Content');
    expect(modalEl).toBeInTheDocument();
  });

  it('click inner', () => {
    jest.spyOn(React, "useRef").mockImplementation(() => ({ current: null }));
    const mockCloseModalEvent = jest.fn();
    const wrapper = render(
      <Modal isActive onClose={mockCloseModalEvent}>
        Content
        <div data-testid="innerElement">InnerContent</div>
      </Modal>
    );

    const innerEl = wrapper.getByTestId('innerElement');
    fireEvent.click(innerEl);
    expect(mockCloseModalEvent).not.toHaveBeenCalled();
  });

  it('click outside', () => {
    const mockCloseModalEvent = jest.fn();
    const wrapper = render(
      <div data-testid="outsideElement">
        <Modal isActive onClose={mockCloseModalEvent}>Content</Modal>
      </div>
    );

    const modalEl = wrapper.getByText('Content');
    jest.spyOn(React, "useRef").mockImplementation(() => ({ current: modalEl }));

    const outsideEl = wrapper.getByTestId('outsideElement');
    fireEvent.click(outsideEl);
    expect(mockCloseModalEvent).toHaveBeenCalled();
  });
})