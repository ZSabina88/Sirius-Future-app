import Button from "./helperComponents/Button";
import TableRow from "./helperComponents/TableRow";
import classes from "../styles/NextLessons.module.scss";

const NextLessons: React.FC = () => {
    return (
        <article className={classes.nextLesson}>
            <h3>Ближайшие уроки</h3>
            <div className={classes.table}>
                <TableRow
                    tableAlignNxt
                    dateNumber="1"
                    date="мая"
                    subject="Ментальная Арифметика"
                    time="14:00-14:25"
                    user="Белкина Инна"
                >
                    <Button type="button" text="Button" />
                    <Button type="button" text="Button" />
                </TableRow>
                <TableRow
                    tableAlignNxt
                    dateNumber="30"
                    date="октября"
                    subject="Программирование"
                    time="11:00-11:11"
                    user="Животновская Оксана"
                >
                    <Button type="button" text="Button" />
                    <Button type="button" text="Button" />
                </TableRow>
                <TableRow
                    tableAlignNxt
                    dateNumber="16"
                    date="ноября"
                    subject="Скорочтение"
                    time="09:00-09:45"
                    user="Мин Елена"
                >
                    <Button type="button" text="Button" />
                    <Button type="button" text="Button" />
                </TableRow>
            </div>
            <Button type="button" text="Button" />
        </article>
    );
}

export default NextLessons;
