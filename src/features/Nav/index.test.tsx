import React from "react";
import Nav from "features/Nav";
import { INavItem } from "features/NavItem";
import { fireEvent, render, waitFor } from "utils/test-utils";

describe('Navigation', () => {
  const menuItems: Array<INavItem> = [
    {
      id: "item",
      link: '/item',
      title: 'Menu Item',
    },
    {
      id: "item2",
      title: 'Menu Item 2',
    }
  ];

  const menuProfileItems: Array<INavItem> = [
    {
      id: "profile",
      link: '/profile',
      title: 'Profile',
    }
  ];

  it('render desktop', () => {
    const wrapper = render(<Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]} />);
    expect(wrapper.getByText('Menu Item')).toBeInTheDocument();
  });

  it('render mobile', async () => {
    const wrapper = render(<Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]} />);
    const burgerBtn = wrapper.getByLabelText('Show mobile menu');
    expect(burgerBtn).toBeInTheDocument();

    const mockOnClickBurger = jest.fn();
    burgerBtn.addEventListener('click', mockOnClickBurger);
    fireEvent.click(burgerBtn);
    await waitFor(() => {
      expect(mockOnClickBurger).toHaveBeenCalledTimes(1);
      expect(wrapper.getByText('Profile')).toBeInTheDocument();
    })
  });
})