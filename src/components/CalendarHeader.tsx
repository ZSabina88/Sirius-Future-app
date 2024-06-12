import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import classes from "../styles/Table.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setMonthIndex } from "../features/CalendarSlice";
import dayjs from "dayjs";

const CalendarHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const monthIndex = useAppSelector((state) => state.calendar.monthIndex);
  function handlePrevMonth() {
    dispatch(setMonthIndex(monthIndex - 1));
  }

  function handleNextMonth() {
    dispatch(setMonthIndex(monthIndex + 1));
  }

  function handleReset() {
    dispatch(setMonthIndex(dayjs().month()));
  }

  return (
    <div className={classes.months}>
      <div className={classes.monthItems}>
          <span onClick={handlePrevMonth}><IoIosArrowRoundBack size="25px" /></span>
          <span className={classes.month}>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</span>
          <span onClick={handleNextMonth}><IoIosArrowRoundForward size="25px" /></span>
        <button onClick={handleReset}>Сегодня</button>
      </div>
    </div>
  );
}

export default CalendarHeader;
