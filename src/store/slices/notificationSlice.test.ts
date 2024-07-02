import { ENotificationType, INotification } from 'types/notification';
import notificationReducer, {
  initialState,
  addNotification,
  removeNotification
} from './notificationSlice';

describe('notificationSlice testing', () => {
  let mockNotification: INotification;
  beforeEach(() => {
    mockNotification = {
      id: 0,
      type: ENotificationType.error,
      message: 'Test error message',
    }
  })
  it('Add notification', () => {
    expect(notificationReducer(initialState, addNotification(mockNotification))).toEqual({
      items: [
        mockNotification
      ]
    })
  })

  it('Remove notification', () => {
    const state = {
      items: [
        mockNotification
      ]
    }
    expect(notificationReducer(state, removeNotification(0))).toEqual({
      items: []
    })
  })
})