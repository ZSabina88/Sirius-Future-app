import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScheduleEntry {
    id: string;
    day: string;
    subject: string;
    time: string;
}

interface ScheduleState {
    entries: ScheduleEntry[];
    filter: string;
}

const initialState: ScheduleState = {
    entries: [],
    filter: '',
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        addEntry: (state, action: PayloadAction<ScheduleEntry>) => {
            state.entries.push(action.payload);
        },
        editEntry: (state, action: PayloadAction<ScheduleEntry>) => {
            const index = state.entries.findIndex(entry => entry.id === action.payload.id);
            if (index !== -1) {
                state.entries[index] = action.payload;
            }
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
});

export const { addEntry, editEntry, setFilter } = scheduleSlice.actions;

export default scheduleSlice;

// export const { addEntry, removeEntry, editEntry } = scheduleSlice.actions;
// name: "schedule",
// initialState,
// reducers: {
//     addEntry: (state, action) => {
//         state.timetable.push(action.payload);
//     },
//     removeEntry: (state, action) => {
//         state.timetable = state.timetable.filter((entry, index) => index !== action.payload);
//     },
//     editEntry: (state, action) => {
//         const { index, newEntry } = action.payload;
//         state.timetable[index] = newEntry;
//     },
// }