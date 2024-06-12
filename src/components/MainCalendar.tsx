import classes from "../styles/MainCalendar.module.scss";
import tablestyle from "../styles/Table.module.scss";
import { useState } from "react";
import { getMonth } from "../utility/calendarfn";

import Month from "./Month";
import CalendarHeader from "./CalendarHeader";
import ChangeSchedule from "./ChangeSchedule";
import Subjects from "./Subjects";
import Header from "./Header";

const weekdays = [{ id: 1, day: "Пн" }, { id: 2, day: "Вт" }, { id: 3, day: "Ср" }, { id: 4, day: "Чт" }, { id: 5, day: "Пт" }, { id: 6, day: "Сб" }, { id: 7, day: "Вс" }];

const MainCalendar: React.FC = () => {
  const [showEditPage, setShowEditPage] = useState(false);
  const [currentMonth] = useState(getMonth());

  const handleClick = () => {
    setShowEditPage(true);
  };

  const handleClose = () => {
    setShowEditPage(false);
  };
  return (
    <>
      <Header />
      {showEditPage && <div className={classes.position}><ChangeSchedule onClose={handleClose} /></div>}
      <div className={classes.mainCalendar}>
        <Subjects handleClick={handleClick} />
      </div>
      <CalendarHeader />
      <div className={tablestyle.table}>
        <div className={tablestyle.tableRow}>
          {weekdays.map((weekday) =>
            <div >
              <p key={weekday.id}>{weekday.day}</p>
            </div>
          )}
        </div>
        <div>
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default MainCalendar;
