import { scrollbar } from './mixins'

describe('Mixins test cases', () => {
  it('Show custom scroll bar', () => {
    const customScroll = scrollbar({
      thumbBackgroundColor: '#000',
      thumbBackgroundColorHover: '#000',
      trackBackgroundColor: '#000',
      size: '10px',
      borderRadius: '0'
    });

    expect(customScroll).toContain('border-radius: 0;');
    expect(customScroll).toContain('inline-size: 10px;'); // default size value
  })
})