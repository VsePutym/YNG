import { combineReducers, configureStore } from '@reduxjs/toolkit'
import yngSlice from './yngSlice.ts'

const rootReducer = combineReducers({
	yng: yngSlice
})
export const store = configureStore({
	reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
