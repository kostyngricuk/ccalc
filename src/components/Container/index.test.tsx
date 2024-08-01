import React from 'react';
import { render } from 'utils/test-utils';
import Container from 'components/Container';

describe('Test render component - Container', () => {
  it('container was rendered with additional class', () => {
    const wrapper = render(
      <Container className='someClass'>Content</Container>
    );
    const element = wrapper.getByText('Content');
    expect(element.className).toContain('someClass');
  })
})