import React from 'react';
import { render } from 'utils/test-utils';
import Columns from 'components/Columns';

describe('Test render component - Columns', () => {
  it('columns was rendered with two columns', () => {
    const wrapper = render(
      <Columns>
        <div>Column 1</div>
        <div>Column 2</div>
      </Columns>
    );
    const col1 = wrapper.getByText('Column 1');
    const col2 = wrapper.getByText('Column 2');
    expect(col1).toBeInTheDocument();
    expect(col2).toBeInTheDocument();
  })
  it('columns was rendered with additional class', () => {
    const wrapper = render(
      <Columns className='someClass'>Content</Columns>
    );
    const element = wrapper.getByText('Content');
    expect(element.className).toContain('someClass');
  })
})