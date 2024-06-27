import React from "react"
import { defaultMockUser, Providers } from "@services/utils/test-utils"
import { mount } from "enzyme"
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
    const wrapper = mount(
      <Providers state={state}>
        <AuthRoute>
          test
        </AuthRoute>
      </Providers>
    )
    expect(wrapper.text()).not.toBe('test');
  })

  it('Redirect to User Info page', () => {
    delete mockUser?.age;
    const state = {
      user: {
        user: mockUser,
        isLoading: true
      }
    }
    const wrapper = mount(
      <Providers state={state}>
        <AuthRoute>
          test
        </AuthRoute>
      </Providers>
    )
    expect(wrapper.text()).not.toBe('test');
  })

  it('Show children components', () => {
    const state = {
      user: {
        user: null,
        isLoading: true
      }
    }
    const wrapper = mount(
      <Providers state={state}>
        <AuthRoute>
          test
        </AuthRoute>
      </Providers>
    )
    expect(wrapper.text()).toBe('test');
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
    const wrapper = mount(
      <Providers state={state}>
        <ProtectedRoute>
          test
        </ProtectedRoute>
      </Providers>
    )
    expect(wrapper.text()).not.toBe('test');
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

    const wrapper = mount(
      <Providers state={state}>
        <ProtectedRoute>
          test
        </ProtectedRoute>
      </Providers>
    )
    expect(wrapper.text()).not.toBe('test');
  })

  it('Show children components', () => {
    const state = {
      user: {
        user: mockUser,
        isLoading: true
      }
    }

    window.location.assign(paths.userInfo.path);

    const wrapper = mount(
      <Providers state={state}>
        <ProtectedRoute>
          test
        </ProtectedRoute>
      </Providers>
    )
    expect(wrapper.text()).toBe('test');
  })
})