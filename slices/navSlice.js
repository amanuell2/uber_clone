import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}


export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

// actions

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;


// selectors

export const selectOrigin = (state) => { state.navSlice.origin }
export const selectDestination = (state) => { state.navSlice.destination }
export const selectTravelTimeInformation = (state) => { state.navSlice.selectTravelTimeInformation }


export default navSlice.reducer