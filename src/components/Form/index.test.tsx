import React from 'react';
import { fireEvent, render, waitFor } from 'utils/test-utils';
import Form from 'components/Form';
import { EResponseStatuses, IResponseError, IResponseSuccess } from 'components/Form/types';
import { GlobalError } from 'react-hook-form';

describe('Render Form Component', () => {
  let mockOnSubmit: jest.Mock;
  beforeEach(() => {
    mockOnSubmit = jest.fn();
  })

  it('Render with success response and submit event', async () => {
    const mockResponseSuccess: IResponseSuccess = {
      status: EResponseStatuses.success,
      message: 'Success message'
    }

    function Component() {
      return (
        <Form onSubmit={mockOnSubmit} response={mockResponseSuccess}>
          Form Content
        </Form>
      )
    }

    const wrapper = render(<Component />);
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();
    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })

  it('Render with one error response', () => {
    const mockResponseError: IResponseError = {
      status: EResponseStatuses.error,
      message: 'Success message'
    }

    function Component() {
      return (
        <Form onSubmit={mockOnSubmit} response={mockResponseError} isLoading>
          Form Content
        </Form>
      )
    }

    const wrapper = render(<Component />);
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();
  })

  it('Render with a few errors response', () => {
    const mockResponseError: IResponseError = {
      status: EResponseStatuses.error,
      message: 'Success message',
      errors: [
        {
          type: 'required',
          message: 'This field is required',
        },
        {
          type: '',
          message: 'This field is required',
        }
      ] as GlobalError[]
    }

    function Component() {
      return (
        <Form onSubmit={mockOnSubmit} response={mockResponseError} isLoading>
          Form Content
        </Form>
      )
    }

    const wrapper = render(<Component />);
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();
  })

  it('Render without response', () => {
    function Component() {
      return (
        <Form onSubmit={mockOnSubmit} response={null} isLoading>
          Form Content
        </Form>
      )
    }

    const wrapper = render(<Component />);
    const form = wrapper.getByTestId('form');
    expect(form).toBeInTheDocument();
  })
})