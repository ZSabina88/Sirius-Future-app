import classes from "../styles/MainCalendar.module.scss";
import Button from "./helperComponents/Button";

type Prop = {
    handleClick: () => void
}


const Subjects: React.FC<Prop> = ({ handleClick }) => {

    return (
        <section className={classes.editsect}>
            {/* <select name="subjects" id="subjects" onChange={handleFilterChange} value={filter}> */}
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
    );
}

export default Subjects;
