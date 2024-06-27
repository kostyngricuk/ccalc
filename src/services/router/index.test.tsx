import React from "react"
import { defaultMockUser, render } from "@services/utils/test-utils"
import { TUser } from "@services/types/user"
import AuthRoute from "./AuthRoute"
import ProtectedRoute from "./ProtectedRoute"
import paths from "./paths"

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
    expect(wrapper.getByText('test')).not.toBeInTheDocument();
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
    expect(wrapper.getByText('test')).not.toBeInTheDocument();
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
    expect(wrapper.getByText('test')).toBeInTheDocument();
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
    const element = wrapper.getByText('test');
    expect(element).not.toBeInTheDocument();
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
    expect(wrapper.getByText('test')).not.toBeInTheDocument();
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
    expect(wrapper.getByText('test')).toBeInTheDocument();
  })
})