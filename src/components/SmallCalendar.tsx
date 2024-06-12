import React, { useState, useEffect } from 'react';
import tablestyle from "../styles/Table.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import dayjs from 'dayjs';
import { getMonth } from "../utility/calendarfn";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setDaySelected, setSmallCalendarMonth, setMonthIndex } from '../features/CalendarSlice';
import EventModal from './EventModal';

const weekdays = [{ id: 1, day: "Пн" }, { id: 2, day: "Вт" }, { id: 3, day: "Ср" }, { id: 4, day: "Чт" }, { id: 5, day: "Пт" }, { id: 6, day: "Сб" }, { id: 7, day: "Вс" }];

const SmallCalendar: React.FC = () => {
  const [showEditPage, setShowEditPage] = useState(false);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(
    dayjs().month()
  );
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);


  const daySelected = useAppSelector((state) => state.calendar.daySelected);
  const monthIndex = useAppSelector((state) => state.calendar.monthIndex);
  const dispatch = useAppDispatch();

  function getDayClass(day: any) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return `${tablestyle.daySmallCactive}`;
    } else if (currDay === slcDay) {
      return `${tablestyle.daySmallCactive}`;
    } else {
      return "";
    }
  }
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    dispatch(setMonthIndex(monthIndex - 1));
  }

  function handleNextMonth() {
    dispatch(setMonthIndex(monthIndex + 1));
  }


  return (
    <>
      {showEditPage ? <div className={tablestyle.eventPosition}><EventModal onClose={() => setShowEditPage(!showEditPage)} /></div> :
        <div className={tablestyle.smallTable}>
          <div className={tablestyle.monthsSmall}>
            <div className={tablestyle.monthItems}>
              <span onClick={handlePrevMonth}><IoIosArrowRoundBack size="25px" /></span>
              <span className={tablestyle.month}>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</span>
              <span onClick={handleNextMonth}><IoIosArrowRoundForward size="25px" /></span>
              <button onClick={() => setShowEditPage(true)}>Create</button>
            </div>
          </div>
          <div className={tablestyle.smalltableRow}>
            {weekdays.map((weekday) =>
              <div >
                <p key={weekday.id}>{weekday.day}</p>
              </div>
            )}
          </div>
          <div className={tablestyle.calendarMonth}>
            {currentMonth.map((row, i) => (
              <React.Fragment key={i}>
                {row.map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      dispatch(setSmallCalendarMonth(currentMonthIdx));
                      dispatch(setDaySelected(day));
                    }}
                    className={`${tablestyle.day} ${getDayClass(day)}`}
                  >
                    <span>{day.format("D")}</ span>
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default SmallCalendar;
