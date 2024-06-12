import React from 'react';
import classes from "../styles/Table.module.scss";
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useAppSelector } from "../hooks/hook";
import BookedLesson from './helperComponents/BookedLesson';

type Prop = {
  day: dayjs.Dayjs
}


const Day: React.FC<Prop> = ({ day }) => {
  const [dayEvents, setDayEvents] = useState<[] | any>([]);
  const events = useAppSelector((state) => state.schedule.events);


  useEffect(() => {
    const filteredEvents = events.filter((event) => event.date === day.format('dddd, MMMM D'));
    setDayEvents(filteredEvents);
  }, [day, events]);


  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? `${classes.dayActive}`
      : "";
  }

  return (
    <div className={classes.day}>
      <div className={getCurrentDayClass()}>
        <span className={classes.date}>{day.format('DD')}</span>
        <div>
          {dayEvents.map((evt: any, idx: number) => (
            <BookedLesson key={idx} subject={evt.subject} time={evt.time} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day;