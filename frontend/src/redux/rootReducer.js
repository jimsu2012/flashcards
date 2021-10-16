import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flashCards: [],
}

export const flashSlice = createSlice({
    name: 'flash',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.flashCards.push(action.payload)
        }
    }
})

export const { addCard } = flashSlice.actions

export const selectFlashCards = (state) => state.flash.flashCards;

export default flashSlice.reducer;