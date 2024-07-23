import { IUserState } from 'types/user';

import { defaultMockUser } from 'constants/mocks';
import userReducer, {
  initialState,
  loginRequest,
  registerRequest,
  updateRequest,
  resetRequest,
  sendCodeRequest,
  changePasswordRequest,
  logoutRequest,
  requestSuccess,
  requsetUserError,
} from './userSlice';

describe('userSlice testing', () => {
  let authState: IUserState;
  beforeEach(() => {
    authState = {
      user: defaultMockUser,
      isLoading: false
    }
  })

  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  });

  it('test login request', () => {
    expect(userReducer(initialState, loginRequest())).toEqual({
      user: null,
      isLoading: true
    })
  });

  it('test register request', () => {
    expect(userReducer(initialState, registerRequest())).toEqual({
      user: null,
      isLoading: true
    })
  });

  it('test update request', () => {
    expect(userReducer(authState, updateRequest())).toEqual({
      user: authState.user,
      isLoading: true
    })
  });

  it('test reset request', () => {
    expect(userReducer(authState, resetRequest())).toEqual({
      user: authState.user,
      isLoading: true
    })
  });

  it('test send code request', () => {
    expect(userReducer(authState, sendCodeRequest())).toEqual({
      user: authState.user,
      isLoading: true
    })
  });

  it('test logout request', () => {
    expect(userReducer(authState, changePasswordRequest())).toEqual({
      user: authState.user,
      isLoading: true
    })
  });

  it('test logout request', () => {
    expect(userReducer(authState, logoutRequest())).toEqual({
      user: null,
      isLoading: false
    })
  });

  it('test login success request', () => {
    expect(userReducer(initialState, requestSuccess(defaultMockUser))).toEqual({
      user: defaultMockUser,
      isLoading: false
    })
  });

  it('test error request', () => {
    expect(userReducer(initialState, requsetUserError())).toEqual({
      user: initialState.user,
      isLoading: false
    })
  });
})