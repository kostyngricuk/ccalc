import React from "react";
import CalorieWidget from "features/CalorieWidget";
import { render } from "utils/test-utils";
import { Color } from "features/CalorieWidget/StyledCalorieWidget";

describe('Render CalorieWidget Component', () => {
  it('with default values', () => {
    const wrapper = render(<CalorieWidget />);
    const element = wrapper.getByTestId('calorieWidget');
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('color')).toBe(Color.gray);
  })

  it('results in red color', () => {
    const wrapper = render(<CalorieWidget limit={2000} eaten={2200} />);
    const element = wrapper.getByTestId('calorieWidget');
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('color')).toBe(Color.red);
  })

  it('results in gray color', () => {
    const wrapper = render(<CalorieWidget limit={2000} eaten={1900} />);
    const element = wrapper.getByTestId('calorieWidget');
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('color')).toBe(Color.gray);
  })

  it('results in secondary color', () => {
    const wrapper = render(<CalorieWidget limit={2000} eaten={1100} />);
    const element = wrapper.getByTestId('calorieWidget');
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('color')).toBe(Color.secondary);
  })

  it('results in primary color', () => {
    const wrapper = render(<CalorieWidget limit={2000} eaten={0} />);
    const element = wrapper.getByTestId('calorieWidget');
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('color')).toBe(Color.primary);
  })
})