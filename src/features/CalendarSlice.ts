import { createSlice } from "@reduxjs/toolkit";
import { addMonths, subMonths } from 'date-fns';

const initialState = {
    currentDate: new Date(),
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        nextMonth: (state) => {
            state.currentDate = addMonths(state.currentDate, 1);
        },
        prevMonth: (state) => {
            state.currentDate = subMonths(state.currentDate, 1);
        },
    },
});

export const { nextMonth, prevMonth } = calendarSlice.actions;

export default calendarSlice;