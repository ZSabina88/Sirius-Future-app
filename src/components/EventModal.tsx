import React from 'react';
import Button from './helperComponents/Button';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { addEntry } from "../features/ScheduleSlice";
import { v4 as uuidv4 } from "uuid";
import classes from "../styles/EventModal.module.scss";
import { IoClose } from "react-icons/io5";

interface ICardModal {
    onClose?: () => void;
}

const EventModal: React.FC<ICardModal> = ({ onClose }) => {
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');
    const dispatch = useAppDispatch();

    const daySelected = useAppSelector((state) => state.calendar.daySelected);
    const [date, setDate] = useState(daySelected.format("dddd, MMMM DD"));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addEntry({ id: uuidv4(), date, subject, time }));
        setDate('');
        setSubject('');
        setTime('');
        onClose && onClose();
    };
    { }

    return (
        <section className={classes.schedule}>
        {/* <section > */}
            <p className={classes.icon} onClick={onClose}><IoClose color="#7362BC" /></p>
            <form onSubmit={handleSubmit}>
                <p>{date}</p>
                <select name="subjects" id="subjects" value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="">Все предметы</option>
                    <option value="ментальная арифметика">Ментальная арифметика</option>
                    <option value="программирование">Программирование</option>
                    <option value="скорочтение">Скорочтение</option>
                    <option value="русский язык">Русский язык</option>
                    <option value="литература">Литература</option>
                    <option value="история">История</option>
                    <option value="география">География</option>
                </select>
                <select name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">Время</option>
                    <option value="09:00 - 10:00">09:00 - 10:00</option>
                    <option value="10:00 - 11:00">10:00 - 11:00</option>
                    <option value="11:00 - 12:00">11:00 - 12:00</option>
                    <option value="12:00 - 13:00">12:00 - 13:00</option>
                    <option value="13:00 - 14:00">13:00 - 14:00</option>
                    <option value="14:00 - 15:00">14:00 - 15:00</option>
                    <option value="15:00 - 16:00">15:00 - 16:00</option>
                    <option value="16:00 - 17:00">16:00 - 17:00</option>
                    <option value="17:00 - 18:00">17:00 - 18:00</option>
                    <option value="18:00 - 19:00">18:00 - 19:00</option>
                    <option value="19:00 - 20:00">19:00 - 20:00</option>
                    <option value="20:00 - 21:00">20:00 - 21:00</option>
                    <option value="21:00 - 22:00">21:00 - 22:00</option>
                </select>
                <Button type="submit" text="Добавить расписание" />
            </form>
        </section>
    );
}

export default EventModal;