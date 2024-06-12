import classes from "../styles/ChangeSchedule.module.scss";
import SmallCalendar from "./SmallCalendar";
import { IoClose } from "react-icons/io5";

interface ICardModal {
    onClose?: () => void;
}

const ChangeSchedule: React.FC<ICardModal> = ({ onClose }) => {
    
    return (
        <section className={`${classes.schedule} ${classes.position}`}>
            <p className={classes.icon} onClick={onClose}><IoClose color="#7362BC" /></p>
            <SmallCalendar/>
        </section>
    );
}
export default ChangeSchedule;