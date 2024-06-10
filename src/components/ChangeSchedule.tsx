import { useState } from "react";
import { useAppDispatch } from "../hooks/hook";
import { addEntry } from "../features/ScheduleSlice";
import Button from "./helperComponents/Button";
import classes from "../styles/ChangeSchedule.module.scss";
import { IoClose } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

interface ICardModal {
    onClose?: () => void;
}

const ChangeSchedule: React.FC<ICardModal> = ({ onClose }) => {
    const [day, setDay] = useState('');
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // dispatch(addEntry({ day, subject, time }));
        dispatch(addEntry({ id: uuidv4(), day, subject, time }));
        setDay('');
        setSubject('');
        setTime('');
        onClose && onClose();
    };

    return (
        <section className={classes.schedule}>
            <p className={classes.icon} onClick={onClose}><IoClose color="#7362BC" /></p>
            <form onSubmit={handleSubmit}>
                <select name="weekdays" id="weekdays" value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="">Все дни</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
                <select name="subjects" id="subjects" value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="">Все предметы</option>
                    <option value="ментальнаяарифметика">Ментальная арифметика</option>
                    <option value="программирование">Программирование</option>
                    <option value="скорочтение">Скорочтение</option>
                    <option value="русский язык">Русский язык</option>
                    <option value="литература">Литература</option>
                    <option value="история">История</option>
                    <option value="география">География</option>
                </select>
                <select name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">Время</option>
                    <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 AM">11:00 AM - 12:00 AM</option>
                    <option value="12:00 PM - 13:00 PM">12:00 PM - 13:00 PM</option>
                    <option value="13:00 PM - 14:00 PM">13:00 PM - 14:00 PM</option>
                    <option value="14:00 PM - 15:00 PM">14:00 PM - 15:00 PM</option>
                    <option value="15:00 PM - 16:00 PM">15:00 PM - 16:00 PM</option>
                    <option value="16:00 PM - 17:00 PM">16:00 PM - 17:00 PM</option>
                    <option value="17:00 PM - 18:00 PM">17:00 PM - 18:00 PM</option>
                    <option value="18:00 PM - 19:00 PM">18:00 PM - 19:00 PM</option>
                    <option value="19:00 PM - 20:00 PM">19:00 PM - 20:00 PM</option>
                    <option value="20:00 PM - 21:00 PM">20:00 PM - 21:00 PM</option>
                    <option value="21:00 PM - 22:00 PM">21:00 PM - 22:00 PM</option>
                </select>
                <Button type="submit" text="Add Entry" />
            </form>
        </section>
    );
}

export default ChangeSchedule;


{/* <input value={day} onChange={(e) => setDay(e.target.value)} required />
 <input value={subject} onChange={(e) => setSubject(e.target.value)} required />
<input value={time} onChange={(e) => setTime(e.target.value)} required /> */}

{/* <input value={day} onChange={(e) => setDay(e.target.value)} required />
            <input value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <input value={time} onChange={(e) => setTime(e.target.value)} required />
            <button type="submit">Add Entry</button> */}


