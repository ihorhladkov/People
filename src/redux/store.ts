import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterSlice } from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});

export { store };

export * from "./slices/counterSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
