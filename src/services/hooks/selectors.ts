import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectCurrentUserEmail = (state: RootState) => state.user.user?.email;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectNotificationItems = (state: RootState) => state.notification.items;