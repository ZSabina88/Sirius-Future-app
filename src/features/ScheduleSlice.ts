import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScheduleEntry {
    id: string,
    date: string | number,
    subject: string,
    time: string,
}

export interface ScheduleState {
    events: ScheduleEntry[],
}

const getInitialEvents = () => {
    const localEvents = window.localStorage.getItem("calendarEvents");
    if (localEvents) {
        return JSON.parse(localEvents);
    }
    window.localStorage.setItem("calendarEvents", JSON.stringify([]));
    return [];
};

const initialState: ScheduleState = {
    events: getInitialEvents(),
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        addEntry: (state, action: PayloadAction<ScheduleEntry>) => {
            state.events.push(action.payload);

            const eventList = window.localStorage.getItem("calendarEvents");
            if (eventList) {
                const eventArr = JSON.parse(eventList);
                eventArr.push({ ...action.payload });
                window.localStorage.setItem("calendarEvents", JSON.stringify(eventArr))
            }
        },
        editEntry: (state, action: PayloadAction<ScheduleEntry>) => {
            const index = state.events.findIndex(event => event.id === action.payload.id);
            if (index !== -1) {
                state.events[index] = action.payload;
            }
        },
    },
});

export const { addEntry, editEntry } = scheduleSlice.actions;

export default scheduleSlice;