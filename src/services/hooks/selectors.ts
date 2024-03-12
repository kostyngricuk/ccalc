import { createAppSelector } from "./store";

export const selectCurrentUser = createAppSelector(
  [
    (state) => state.user.user
  ],
  (user) => user
)

export const selectIsLoading = createAppSelector(
  [
    (state) => state.user.isLoading
  ],
  (isLoading) => isLoading === true
)

export const selectNotificationItems = createAppSelector(
  [
    (state) => state.notification.items
  ],
  (items) => items
)