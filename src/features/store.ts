import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./CalendarSlice";
import scheduleSlice from "./ScheduleSlice";

const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        schedule: scheduleSlice.reducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;