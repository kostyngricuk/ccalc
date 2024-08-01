import React from 'react';
import { fireEvent, render } from 'utils/test-utils';
import Button, { EnumButtonColor, EnumButtonType } from 'components/Button'

describe('Test render component - Button', () => {
  it('button was rendered with default values', () => {
    const wrapper = render(
      <Button>Some text</Button>
    );
    const element = wrapper.getByRole('button');
    expect(element).toBeInTheDocument();
  })

  it('button has aria-label', () => {
    const wrapper = render(
      <Button
        type={EnumButtonType.button}
        className='test-btn'
        color={EnumButtonColor.black}
        ariaLabel='Test button'
        $isDisabled
      >Some text</Button>
    );
    const element = wrapper.getByRole('button');
    expect(element.getAttribute('aria-label')).toBe('Test button');
  })

  it('click on the button', () => {
    const mockClickButtonEvent = jest.fn();

    const wrapper = render(
      <Button
        type={EnumButtonType.button}
        onClick={mockClickButtonEvent}
      >Some text</Button>
    );
    const element = wrapper.getByRole('button');

    fireEvent.click(element);
    expect(mockClickButtonEvent).toHaveBeenCalled();
  })
})