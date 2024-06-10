import classes from "../styles/Table.module.scss";
// import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { format, startOfMonth, endOfMonth, getDaysInMonth, getDay, subMonths, addMonths } from 'date-fns';
import { nextMonth, prevMonth } from "../features/CalendarSlice";
import { IoIosArrowRoundBack } from "react-icons/io";
import BookedLesson from "./helperComponents/BookedLesson";
import { IoIosArrowRoundForward } from "react-icons/io";




const weekdays = [{ id: 1, day: "Пн" }, { id: 2, day: "Вт" }, { id: 3, day: "Ср" }, { id: 4, day: "Чт" }, { id: 5, day: "Пт" }, { id: 6, day: "Сб" }, { id: 7, day: "Вс" }];


const Table: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentDate = useAppSelector((state) => state.calendar.currentDate);
    const entries = useAppSelector((state) => state.schedule.entries);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);
    const daysInMonth = getDaysInMonth(currentDate);
    const startDay = getDay(firstDayOfMonth);

    const monthName = format(currentDate, 'MMMM yyyy');

    const generateDates = () => {
        let dates: any = [];
        let dayCounter = 1;
        let prevMonthDays = getDaysInMonth(subMonths(currentDate, 1));

        for (let i = 0; i < startDay; i++) {
            dates.push(
                <td key={`prev-${i}`} className="inactive">
                    {prevMonthDays - startDay + i + 1}
                </td>
            );
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday =
                i === currentDate.getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear()
                    ? "activeDay"
                    : "";

            const dayEntries = entries.filter(entry => {
                const entryDate = new Date(entry.day);
                return entryDate.getDate() === i && entryDate.getMonth() === month && entryDate.getFullYear() === year;
            });
            // dates.push(
            //     <td key={i} className={isToday}>
            //         <div>{i}</div>
            //         <BookedLesson day={i} month={month} year={year} />
            //     </td>
            // );

            dates.push(
                <td key={i} className={isToday}>
                    <div>{i}</div>
                    {dayEntries.map(entry => (
                        <div key={entry.id} className="entry">{entry.subject} {entry.time}</div>
                    ))}
                </td>
            );
        }

        const nextDaysCount = 7 - (dates.length % 7);
        for (let i = 1; i <= nextDaysCount; i++) {
            dates.push(
                <td key={`next-${i}`} className="inactive">
                    {i}
                </td>
            );
        }

        return dates;
    };

    const monthDays = generateDates();
    const firstWeek = monthDays.slice(1, 8).map((item: any) => <tr>{item}</tr>);
    const secondWeek = monthDays.slice(8, 15).map((item: any) => <tr>{item}</tr>);
    const thirdWeek = monthDays.slice(15, 22).map((item: any) => <tr>{item}</tr>);
    const fourthWeek = monthDays.slice(22, 29).map((item: any) => <tr>{item}</tr>);
    const fifthWeek = monthDays.slice(29, 36).map((item: any) => <tr>{item}</tr>);




    return (
        <>
            <div className={classes.months}>
                <div>
                    <span onClick={() => dispatch(prevMonth())}><IoIosArrowRoundBack size="25px" /></span>
                    <span>{monthName}</span>
                    <span onClick={() => dispatch(nextMonth())}><IoIosArrowRoundForward size="25px" /></span>
                    <button onClick={() => dispatch({ type: 'calendar/setCurrentDate', payload: new Date() })}>
                        Сегодня</button>
                </div>
            </div>
            <table className={classes.table}>
                <thead>
                    {weekdays.map((weekday) =>
                        <tr >
                            <td key={weekday.id}>{weekday.day}</td>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {firstWeek}
                    {secondWeek}
                    {thirdWeek}
                    {fourthWeek}
                    {fifthWeek}
                </tbody>

            </table>
        </>
    );

};


export default Table;
// {weeks}


//     <>
//     <div className={classes.months}>
//       <div>
//         <span onClick={() => dispatch(prevMonth())}>
//           <IoIosArrowRoundBack size="25px" />
//         </span>
//         <span>{monthName}</span>
//         <span onClick={() => dispatch(nextMonth())}>
//           <IoIosArrowRoundForward size="25px" />
//         </span>
//         <button onClick={() => dispatch(setToday())}>Сегодня</button>
//       </div>
//     </div>
//     <table className={classes.table}>
//       <thead>
//         <tr>
//           {weekdays.map((day, index) => (
//             <th key={index}>{day}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {weeks.map((week, index) => (
//           <tr key={index}>{week}</tr>
//         ))}
//       </tbody>
//     </table>
//   </>

// const prevMonthDays = getDaysInMonth(subMonths(currentDate, 1));
// const nextMonthDays = getDaysInMonth(addMonths(currentDate, 1));

// for (let i = 1; i <= startDay; i++) {
//     dates.push(<li className="inactive">{getDaysInMonth(subMonths(currentDate, 1)) - startDay + i}</li>);
// }

// for (let i = 1; i <= daysInMonth; i++) {
//     const isToday = i === currentDate.getDate()
//         && month === new Date().getMonth()
//         && year === new Date().getFullYear() ? "activeDay" : "";

//     dates.push(<li className={isToday} key={i}>{i}</li>);
// }

// for (let i = getDay(lastDayOfMonth); i < 6; i++) {
//     dates.push(<li className="inactive" key={i + daysInMonth}>{i - getDay(lastDayOfMonth) + 1}</li>);
// }

// const weeks = [];
// for (let i = 0; i < monthDays.length; i += 7) {
//     weeks.push(
//         <tr key={i}>
//             {monthDays.slice(i, i + 7)}
//         </tr>
//     );
// }