import Input from "./Input";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

type PInput = {
    passwordName: string,
    passwordValue?: string,
    passwordChange: (e: any) => void,
    placeholder: string,
    onBlur?: () => void,
    onFocus?: () => void
}

const PasswordInput: React.FC<PInput> = ({
    passwordName,
    passwordValue,
    passwordChange,
    placeholder,
    onBlur,
    onFocus
}) => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <Input
                name={passwordName}
                type={visible ? "text" : "password"}
                value={passwordValue}
                placeholder={placeholder}
                onChange={passwordChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onClick={() => setVisible(!visible)}
            >
                {visible ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </Input>
        </>
    );
}

export default PasswordInput;
