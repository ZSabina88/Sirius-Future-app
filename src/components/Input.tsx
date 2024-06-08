import classes from "../styles/Input.module.scss";

type Input = {
    name: string,
    placeholder: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    onClick?: () => void,
    onBlur?: () => void, 
    onFocus?: () => void, 
    children?: React.ReactNode
}

const Input: React.FC<Input> = ({ name, placeholder, value, onChange, type, onClick, onBlur, onFocus, children }) => {
    return (
        <>
            <div className={classes.wrapper}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={classes.input}
                />
                <span className={classes.icon} onClick={onClick}>{children}</span>
            </div>
        </>
    );
}

export default Input;
