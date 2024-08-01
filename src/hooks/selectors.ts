import { RootState } from 'store/store';

export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectProductItems = (state: RootState) => state.product.items;
export const selectProductSelectedItems = (state: RootState) => state.product.selectedItems;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectNotificationItems = (state: RootState) => state.notification.items;