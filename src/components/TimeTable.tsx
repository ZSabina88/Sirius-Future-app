import { useState } from "react";
import classes from "../styles/TimeTable.module.scss";
import Header from './Header';
// import { useAppDispatch, useAppSelector } from "../hooks/hook";
// import { setFilter } from "../features/ScheduleSlice";
import MainCalendar from "./MainCalendar";


const TimeTable: React.FC = () => {
 
  // const dispatch = useAppDispatch();
  // const filter = useAppSelector((state) => state.schedule.filter);

  // const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(setFilter(event.target.value));
  // };

  return (
    <>
      
      <MainCalendar/>

    </>
  );
}

export default TimeTable;
