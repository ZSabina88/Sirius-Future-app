import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
    monthIndex: dayjs().month(),
    smallCalendarMonth: null,
    daySelected: dayjs(),
    selectedEvent: null,
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setMonthIndex: (state, action) => {
            state.monthIndex = action.payload;
        },
        setSmallCalendarMonth: (state, action) => {
            state.smallCalendarMonth = action.payload;
        },
        setDaySelected: (state, action) => {
            state.daySelected = action.payload;
        },
        setSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload;
        },
    },
});

export const { setMonthIndex, setDaySelected, setSmallCalendarMonth, setSelectedEvent } = calendarSlice.actions;

export default calendarSlice;