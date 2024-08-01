import React from 'react';
import { fireEvent, render, RenderResult } from 'utils/test-utils';
import { DropdownContent, DropdownTrigger } from 'components/Dropdown';

describe('Test render component - Dropdown', () => {
  let wrapper: RenderResult;
  let triggerEl: HTMLElement;
  let contentEl: HTMLElement;
  let outsideEl: HTMLElement;
  beforeEach(() => {
    wrapper = render(
      <div data-testid="outsideElement">
        <DropdownTrigger>Trigger</DropdownTrigger>
        <DropdownContent>Content</DropdownContent>
      </div>
    );
    triggerEl = wrapper.getByText('Trigger');
    contentEl = wrapper.getByText('Content');
    outsideEl = wrapper.getByTestId('outsideElement');
  });

  it('was rendered', () => {
    expect(triggerEl).toBeInTheDocument();
    expect(contentEl).toBeInTheDocument();
  });

  it('active status was changed', () => {
    expect(triggerEl.getAttribute('data-active')).toBe('false');

    fireEvent.click(triggerEl);
    expect(triggerEl.getAttribute('data-active')).toBe('true');
  });

  it('click outside', () => {
    fireEvent.click(outsideEl);
    expect(triggerEl.getAttribute('data-active')).toBe('false');
  })
})