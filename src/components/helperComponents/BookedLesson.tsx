import classes from "../../styles/BookedLesson.module.scss";
import { IoWalletOutline } from "react-icons/io5";


type Prop = {
  subject: string,
  time: string,
}

const BookedLesson: React.FC<Prop> = ({ subject, time }) => {
 
  return (
    <div className={classes.schedule}>
      <p style={{ fontSize: "8px" }}>{time}</p>
      <p>{subject}</p>
      <span className={classes.walletIcon}><IoWalletOutline size="12px"/></span>
    </div>
  );
}

export default BookedLesson;