import { useDispatch } from "react-redux";
import { createSelector } from "reselect";

import type { AppDispatch, RootState } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const createAppSelector = createSelector.withTypes<RootState>()