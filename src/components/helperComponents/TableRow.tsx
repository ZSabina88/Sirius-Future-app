import classes from "../../styles/TableRow.module.scss";
import { LiaUserCircleSolid } from "react-icons/lia";
import classNames from "classnames";

type Table = {
    subject: string,
    amount?: string,
    date?: string,
    user?: string,
    time?: string,
    dateNumber?: string,
    tableAlignNxt?: boolean,
    children?: React.ReactNode
}

const TableRow: React.FC<Table> = ({ subject,
    amount,
    date,
    dateNumber,
    user,
    children,
    time,
    tableAlignNxt }) => {
    const addclasses = classNames(classes.tablerow, {
        [classes.tableAlignNext]: tableAlignNxt,
    });
    return (
        <div className={addclasses}>
            <p className={classes.date}>
                <span>{dateNumber}</span>
                <span>{date}</span>
            </p>
            <p>{subject}</p>
            <p>{amount}</p>
            <p>{time}</p>
            <p className={classes.user}><span><LiaUserCircleSolid /></span>{user}</p>
            <div className={classes.buttondiv}>{children}</div>
        </div>
    );
}

export default TableRow;
