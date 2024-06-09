import classes from "../../styles/Button.module.scss";

type Button = {
    text: string,
    type: "submit" | "reset" | "button" | undefined,
    disabled?: boolean,
    onClick?: () => void
}

const Button: React.FC<Button> = ({ text, type, disabled, onClick }) => {
    return (
        <button className={classes.button} type={type} onClick={onClick} disabled={disabled}>{text}</button>
    );
}

export default Button;
