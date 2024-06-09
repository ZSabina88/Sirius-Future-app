import TableRow from "./helperComponents/TableRow";
import classes from "../styles/LessonBalance.module.scss";
import Button from "./helperComponents/Button";

const LessonBalance: React.FC = () => {
    return (
        <article className={classes.lessonBalance}>
            <h3>Баланс занятий</h3>
            <div className={classes.tableSection}>
                <TableRow subject="Ментальная Арифметика" amount="32" />
                <TableRow subject="Программирование" amount="0" />
                <TableRow subject="Скорочтение" amount="4" />
                <TableRow subject="Арифметика" amount="2" />
            </div>
            <Button type="button" text="Button" />
        </article>
    );
}

export default LessonBalance;
