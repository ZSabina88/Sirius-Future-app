import { IconType } from "react-icons";

import { GrHomeRounded } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import { PiPuzzlePiece } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { PiQuestionLight } from "react-icons/pi";

interface IList {
    id: number,
    to: string,
    list: string
};

interface IIcon {
    id: number,
    to: string,
    icon: IconType | any
}



export const navlist: IList[] = [
    {
        id: 0,
        to: "главная",
        list: "Главная"
    },
    {
        id: 1,
        to: "расписание",
        list: "Расписание"
    },
    {
        id: 2,
        to: "оплата",
        list: "Оплата"
    },
    {
        id: 3,
        to: "достижения",
        list: "Достижения"
    },
    {
        id: 4,
        to: "тренажеры",
        list: "Тренажеры"
    },
    {
        id: 5,
        to: "библиотека",
        list: "Библиотека"
    },
    {
        id: 6,
        to: "проверкасвязи",
        list: "Проверка связи"
    },
    {
        id: 7,
        to: "настройки",
        list: "Настройки"
    },
    {
        id: 8,
        to: "вопросы",
        list: "Вопросы"
    }
]

export const navicon: IIcon[] = [
    {
        id: 0,
        to: "главная",
        icon: <GrHomeRounded />
    },
    {
        id: 1,
        to: "расписание",
        icon: <LuCalendarDays />
    },
    {
        id: 2,
        to: "оплата",
        icon: <IoWalletOutline />
    },
    {
        id: 3,
        to: "достижения",
        icon: <IoTrophyOutline />
    },
    {
        id: 4,
        to: "тренажеры",
        icon: <PiPuzzlePiece />
    },
    {
        id: 5,
        to: "библиотека",
        icon: <FaRegFolderOpen />
    },
    {
        id: 6,
        to: "проверкасвязи",
        icon: <CiHeadphones />
    },
    {
        id: 7,
        to: "настройки",
        icon: <FiSettings />
    },
    {
        id: 8,
        to: "вопросы",
        icon: <PiQuestionLight />
        
    },
]