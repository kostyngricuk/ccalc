import React from "react"
import { defaultMockProduct, defaultMockSelectedProduct, defaultMockUser, render } from "utils/test-utils"
import CalculatorScreen from "./CalculatorScreen"
import ContactsScreen from "./ContactsScreen"
import FaqScreen from "./FaqScreen"
import HelpScreen from "./HelpScreen"
import ResetScreen from "./ResetScreen"
import SettingsScreen from "./SettingsScreen"
import SigninScreen from "./SigninScreen"
import SignupScreen from "./SignupScreen"
import UserInfoScreen from "./UserInfoScreen"

const state = {
  user: {
    user: defaultMockUser,
    isLoading: false,
  },
  product: {
    items: [defaultMockProduct],
    selectedItems: [defaultMockSelectedProduct]
  }
}

describe('Calculator screen', () => {
  it('Render', () => {
    const screen = render(<CalculatorScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Choose products' })).toBeInTheDocument()
  })
})

describe('Contacts screen', () => {
  it('Render', () => {
    const screen = render(<ContactsScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Contacts' })).toBeInTheDocument()
  })
})

describe('Faq screen', () => {
  it('Render', () => {
    const screen = render(<FaqScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'FAQ' })).toBeInTheDocument()
  })
})

describe('Help screen', () => {
  it('Render', () => {
    const screen = render(<HelpScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Help' })).toBeInTheDocument()
  })
})

describe('Reset screen', () => {
  it('Render', () => {
    const screen = render(<ResetScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Change Password' })).toBeInTheDocument()
  })
})

describe('Settings screen', () => {
  it('Render', () => {
    const screen = render(<SettingsScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Settings' })).toBeInTheDocument()
  })
})

describe('Signin screen', () => {
  it('Render', () => {
    const screen = render(<SigninScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
  })
})

describe('Signup screen', () => {
  it('Render', () => {
    const screen = render(<SignupScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Sign up' })).toBeInTheDocument()
  })
})

describe('UserInfo screen', () => {
  it('Render', () => {
    const screen = render(<UserInfoScreen />, { preloadedState: state })
    expect(screen.getByRole('heading', { name: 'Info about you' })).toBeInTheDocument()
  })
})