import React from "react";
import LanguageSwitcher from "features/LanguageSwitcher";
import { fireEvent, render, waitFor } from "utils/test-utils";

describe('Language switcher component', () => {
  it('render switcher', () => {
    const wrapper = render(<LanguageSwitcher />);
    expect(wrapper.getByText('EN')).toBeInTheDocument();
  })

  it('change language', async () => {
    const wrapper = render(<LanguageSwitcher />);
    const btnRu = wrapper.getByText('RU');
    expect(btnRu.className).not.toContain('is-active');
    fireEvent.click(btnRu);
    await waitFor(() => {
      expect(btnRu.className).toContain('is-active');
    })
  })
})