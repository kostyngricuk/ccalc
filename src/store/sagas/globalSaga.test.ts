import { head } from 'lodash';
import { errorAction } from "constants/errors";
// eslint-disable-next-line import/no-named-as-default
import globalSaga, { showError } from "./globalSaga";


describe('Test saga init', () => {
  const genObj = globalSaga();

  it('Should exist showError', () => {
    const res = genObj.next();
    expect(head(res.value?.payload?.args)).toBe(errorAction)
  })
})

it('Test showError as code saga', () => {
  const mockData = {
    payload: {
      error: {
        code: 'error_code'
      }
    }
  }

  const genObj = showError(mockData);
  genObj.next();
  expect(genObj.next().done).toBeTruthy();
});

it('Test showError as message saga', () => {
  const mockData = {
    payload: {
      error: {
        message: 'Error message'
      }
    }
  }

  const genObj = showError(mockData);
  genObj.next()
  expect(genObj.next().done).toBeTruthy();
});