import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectNotificationItems = (state: RootState) => state.notification.items;