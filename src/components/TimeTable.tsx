import { useState } from "react";
import classes from "../styles/TimeTable.module.scss";
import Header from './Header';
import Table from "./Table";
import Button from './helperComponents/Button';
import ChangeSchedule from "./ChangeSchedule";


const TimeTable: React.FC = () => {
  const [showEditPage, setShowEditPage] = useState(false);

  const handleClick = () => {
    setShowEditPage(true);
  }

  const handleClose = () => {
    setShowEditPage(false);
}

  return (
    <>
      <Header />
      {showEditPage && <div className={classes.position}><ChangeSchedule onClose={handleClose}/></div>}
      <div className={classes.timeTable}>
        <section className={classes.editsect}>
          <select name="subjects" id="subjects">
            <option value="ментальнаяарифметика">Ментальная арифметика</option>
            <option value="программирование">Программирование</option>
            <option value="скорочтение">Скорочтение</option>
            <option value="русский язык">Русский язык</option>
            <option value="литература">Литература</option>
            <option value="история">История</option>
            <option value="география">География</option>
          </select>
          <Button onClick={handleClick} type="button" text="Изменить расписание" />
        </section>
        <Table />
      </div>
      
    </>
  );
}

export default TimeTable;
