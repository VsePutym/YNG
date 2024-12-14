import { createSlice } from '@reduxjs/toolkit'
import { initialStateType } from '../Types/Types.ts'

const initialState: initialStateType = {
	menuOpen: false
}

const yngSlice = createSlice({
	name: 'yng',
	initialState: initialState,
	reducers: {
		setMenuOpen: (state) => {
			state.menuOpen = !state.menuOpen
			console.log(state.menuOpen)
		}
	}
})

export default yngSlice.reducer
export const {setMenuOpen} = yngSlice.actions