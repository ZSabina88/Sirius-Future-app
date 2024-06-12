import React from 'react';
import Day from './Day';
import classes from "../styles/Table.module.scss";

type Prop = {
  month: any
}
const Month: React.FC<Prop> = ({ month }) => {
  return (
    <div className={classes.mainCalendarMonth}>
      {month.map((row: any, i: number) => (
        <React.Fragment key={i}>
          {row.map((day: any, idx: number) => (
            <Day day={day} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month;
