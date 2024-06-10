import classes from "../../styles/BookedLesson.module.scss";
import { useAppSelector } from "../../hooks/hook";

interface BookedLessonProps {
    day: number;
    month: number;
    year: number;
}

const BookedLesson: React.FC<BookedLessonProps> = ({ day, month, year }) => {
    const entries = useAppSelector((state) => state.schedule.entries);
    const filter = useAppSelector((state) => state.schedule.filter);
    const filteredEntries = filter ? entries.filter(entry => entry.subject === filter) : entries;

    const dayEntries = filteredEntries.filter(entry => {
        const entryDate = new Date(entry.day);
        return entryDate.getDate() === day && entryDate.getMonth() === month && entryDate.getFullYear() === year;
    });

    return (
        <div className={classes.schedule}>
            {dayEntries.map(entry => (
                <div key={entry.id}>
                    <p>{entry.subject}</p>
                    <p>{entry.time}</p>
                </div>
            ))}
        </div>
    );
}

export default BookedLesson;

// {
//     filteredEntries.map(entry => (
//         <div key={entry.id} className={classes.tableRow}>
//             <p>{entry.day}</p>
//             <p>{entry.subject}</p>
//             <p>{entry.time}</p>
//         </div>
//     ))
// }