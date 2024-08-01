import { defaultMockUser } from 'constants/mocks';
import authApi, { IAuthResponse } from 'services/api/auth';
import userApi from 'services/api/user';
import {
  changePasswordRequest,
  loginRequest,
  registerRequest,
  requestSuccess,
  resetRequest,
  sendCodeRequest,
  updateRequest
} from 'store/slices/userSlice';
import { head, last } from 'lodash';
import { createMockApiRequest, IDispatchRes, runMockSaga } from 'utils/test-utils';
import { reqSaveCalcAction } from 'constants/global';
// eslint-disable-next-line import/no-named-as-default
import userSaga, {
  changePassword,
  resetPassword,
  saveCalcRequset,
  sendCode,
  userLogin,
  userRegister,
  userUpdate
} from './userSaga';

describe('Test saga init', () => {
  const genObj = userSaga();

  it('Should exist loginRequest', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(loginRequest.type)
  })

  it('Should exist registerRequest', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(registerRequest.type)
  })

  it('Should exist updateRequest', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(updateRequest.type)
  })

  it('Should exist resetRequest', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(resetRequest.type)
  })

  it('Should exist sendCodeRequest', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(sendCodeRequest.type)
  })

  it('Should exist changePasswordRequest', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(changePasswordRequest.type)
  })

  it('Should exist reqSaveCalcAction', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(reqSaveCalcAction)
  })
})

describe('Test each userSaga', () => {
  const authResponseSuccess: IAuthResponse = {
    user: defaultMockUser,
    success: true,
  }

  const authResponseErrorCode: IAuthResponse = {
    success: false,
    errorCode: 'some_error'
  }

  let dispatched: IDispatchRes[];
  let mockRequest: jest.SpyInstance;

  beforeEach(() => {
    dispatched = [];
  })

  afterEach(() => {
    mockRequest.mockClear();
  })

  describe('Test userLogin saga', () => {
    const sagaFunc = userLogin;
    const mockData = {
      payload: {
        email: 'mockUser@gmail.com',
        password: '123'
      }
    }

    const api = authApi;
    const apiMethod = 'login';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  describe('Test userRegister saga', () => {
    const sagaFunc = userRegister;
    const mockData = {
      payload: {
        email: 'mockUser@gmail.com',
        password: '123',
        confirmPassword: '123'
      }
    };

    const api = authApi;
    const apiMethod = 'register';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should get error that password is mismtch', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      mockData.payload = {
        email: 'mockUser@gmail.com',
        password: '123',
        confirmPassword: '321'
      }

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error('PASSWORD_MISMATCH'));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  describe('Test userUpdate saga', () => {
    const sagaFunc = userUpdate;
    const mockData = {
      payload: {
        password: '123',
        confirmPassword: '123',
        successCallback: jest.fn()
      }
    }

    const api = userApi;
    const apiMethod = 'update';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should get error that password is mismtch', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      mockData.payload = {
        password: '123',
        confirmPassword: '321',
        successCallback: jest.fn()
      }

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error('PASSWORD_MISMATCH'));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  describe('Test resetPassword saga', () => {
    const sagaFunc = resetPassword;
    const mockData = {
      payload: {
        email: 'mockUser@gmail.com',
      }
    }

    const api = authApi;
    const apiMethod = 'resetPassword';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  describe('Test sendCode saga', () => {
    const sagaFunc = sendCode;
    const mockData = {
      payload: {
        email: 'mockUser@gmail.com',
        code: '1234'
      }
    }

    const api = authApi;
    const apiMethod = 'sendCode';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  describe('Test changePassword saga', () => {
    const sagaFunc = changePassword;
    const mockData = {
      payload: {
        email: 'mockUser@gmail.com',
        password: '123',
        confirmPassword: '123',
        navigate: jest.fn()
      }
    }

    const api = userApi;
    const apiMethod = 'changePassword';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should get error that password is mismtch', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      mockData.payload = {
        email: 'mockUser@gmail.com',
        password: '123',
        confirmPassword: '321',
        navigate: jest.fn()
      }

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error('PASSWORD_MISMATCH'));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });

  describe('Test saveCalcRequset saga', () => {
    const sagaFunc = saveCalcRequset;
    const mockData = {
      payload: {
        count: 240
      }
    }

    const api = userApi;
    const apiMethod = 'eaten';

    it('Should use mock request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData);

      expect(mockRequest).toHaveBeenCalledTimes(1);
    })

    it('Should success', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseSuccess)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)).toEqual(requestSuccess(defaultMockUser));
    })

    it('Should get error code', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode)

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.error).toEqual(new Error(authResponseErrorCode.errorCode));
    })

    it('Should error request', async () => {
      mockRequest = createMockApiRequest(api, apiMethod, authResponseErrorCode);

      await runMockSaga(sagaFunc, mockData, dispatched);

      expect(last(dispatched)?.type).toBe('REQUEST_ERROR');
    })
  });
})