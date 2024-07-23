import React from 'react'
import { render } from 'utils/test-utils'
import { TUser } from 'types/user'
import AuthRoute from 'router/AuthRoute'
import ProtectedRoute from 'router/ProtectedRoute'
import paths from 'router/paths'
import { defaultMockUser } from 'constants/mocks'

describe('Test auth routes', () => {
  let mockUser: TUser;
  beforeEach(() => {
    mockUser = defaultMockUser
  })

  it('Redirect to Home page', () => {
    const state = {
      user: {
        user: mockUser,
        isLoading: true
      }
    }
    const wrapper = render(
      <AuthRoute>
        test
      </AuthRoute>,
      {
        preloadedState: state
      }
    )
    const element = wrapper.queryByText('test');
    expect(element).toBeNull();
  })

  it('Redirect to User Info page', () => {
    delete mockUser?.age;
    const state = {
      user: {
        user: mockUser,
        isLoading: true
      }
    }
    const wrapper = render(
      <AuthRoute>
        test
      </AuthRoute>,
      {
        preloadedState: state
      }
    )
    const element = wrapper.queryByText('test');
    expect(element).toBeNull();
  })

  it('Show children components', () => {
    const state = {
      user: {
        user: null,
        isLoading: true
      }
    }
    const wrapper = render(
      <AuthRoute>
        test
      </AuthRoute>,
      {
        preloadedState: state
      }
    )
    const element = wrapper.queryByText('test');
    expect(element).toBeInTheDocument();
  })
})

describe('Test protected routes', () => {
  let mockUser: TUser;
  beforeEach(() => {
    mockUser = defaultMockUser
  })

  it('Redirect to SignIn for unauthorized user', () => {
    const state = {
      user: {
        user: null,
        isLoading: true
      }
    }
    const wrapper = render(
      <ProtectedRoute>
        test
      </ProtectedRoute>,
      {
        preloadedState: state
      }
    )
    const element = wrapper.queryByText('test');
    expect(element).toBeNull();
  })

  it('Redirect to User Info page', () => {
    delete mockUser?.age;
    const state = {
      user: {
        user: mockUser,
        isLoading: true
      }
    }

    window.location.assign("/");

    const wrapper = render(
      <ProtectedRoute>
        test
      </ProtectedRoute>,
      {
        preloadedState: state
      }
    )
    const element = wrapper.queryByText('test');
    expect(element).toBeNull();
  })

  it('Show children components', () => {
    const state = {
      user: {
        user: mockUser,
        isLoading: true
      }
    }

    window.location.assign(paths.userInfo.path);

    const wrapper = render(
      <ProtectedRoute>
        test
      </ProtectedRoute>,
      {
        preloadedState: state
      }
    )
    const element = wrapper.queryByText('test');
    expect(element).toBeInTheDocument();
  })
})