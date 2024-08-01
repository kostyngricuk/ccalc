import React from 'react';
import { render } from 'utils/test-utils';
import Section from 'components/Section';

it('Render Section Component with default props', () => {
  const wrapper = render(<Section>Content</Section>);
  expect(wrapper.getByText('Content')).toBeInTheDocument();
})