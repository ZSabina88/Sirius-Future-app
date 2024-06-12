import classes from "../../styles/BookedLesson.module.scss";

type Prop = {
  subject: string,
  time: string
}

const BookedLesson: React.FC<Prop> = ({ subject, time }) => {


  return (
    <div className={classes.schedule}>
      <p style={{ fontSize: "8px" }}>{time}</p>
      <p>{subject}</p>
    </div>
  );
}

export default BookedLesson;