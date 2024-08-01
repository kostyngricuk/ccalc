/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { fireEvent, render, waitFor } from 'utils/test-utils';
import { defaultMockUser } from 'constants/mocks';
import Header from '.';

describe('Header tests', () => {
  it('Header on the page', () => {
    const state = {
      user: {
        user: null,
        isLoading: true
      }
    };
    const wrapper = render(<Header />, {
      preloadedState: state
    });
    const element = wrapper.getByTestId('header');
    expect(element).toBeInTheDocument();
  });

  it('Show menu for authorized users and logout', async () => {
    const state = {
      user: {
        isLoading: false,
        user: defaultMockUser,
      },
    };
    const wrapper = render(<Header />, {
      preloadedState: state
    });
    const element = wrapper.getByTestId('nav');
    expect(element).toBeInTheDocument();

    const exitBtn = wrapper.getByText('Exit');
    const mockOnClickExit = jest.fn();
    exitBtn.addEventListener('click', mockOnClickExit);
    fireEvent.click(exitBtn);
    await waitFor(() => {
      expect(mockOnClickExit).toHaveBeenCalledTimes(1);
    })
  });
})