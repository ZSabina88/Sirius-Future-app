import classes from "../../styles/UserIcon.module.scss";

type Icon = {
    children: any
}

const UserIcon: React.FC<Icon> = ({ children }) => {
    return (
        <div className={classes.userIcon}>
            {children}
        </div>
    );
}

export default UserIcon;
