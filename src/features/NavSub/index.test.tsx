import React from "react";
import { render } from "utils/test-utils";
import NavSub from ".";

describe('Sub menu', () => {
  it('render content', () => {
    const wrapper = render(<NavSub link="/" title="Sub Menu">Content</NavSub>);
    expect(wrapper.getByText('Content')).toBeInTheDocument();
  })

  it('render with link', () => {
    const wrapper = render(<NavSub link="/" title="Sub Menu">Content</NavSub>);
    expect(wrapper.getByText('Sub Menu').tagName).toBe('A');
  })

  it('render with link', () => {
    const wrapper = render(<NavSub title="Sub Menu">Content</NavSub>);
    expect(wrapper.getByText('Sub Menu').tagName).not.toBe('A');
  })
})