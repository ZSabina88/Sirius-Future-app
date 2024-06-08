import React from 'react';
import classes from "../styles/Login.module.scss";
import logo from "../assets/Logomark_1_.png";
import FormContainer from './FormContainer';
import Input from './Input';
import PasswordInput from './PasswordInput';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';

type Credentials = {
    email: string,
    password: string
}

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState<Credentials>({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setCredentials({
            ...credentials,
            [name]: value,
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('credentials', JSON.stringify(credentials));
        navigate("/userpage");
    }
    console.log(credentials);

    return (
        <section className={classes.container}>
            <img src={logo} alt="sirius logo" />
            <FormContainer title='Вход в Sirius Future' onSubmit={handleSubmit}>
                <Input
                    name='email'
                    type='email'
                    placeholder='E-mail'
                    value={credentials.email}
                    onChange={handleChange}
                />
                <PasswordInput
                    passwordName='password'
                    placeholder='Пароль'
                    passwordChange={handleChange}
                    passwordValue={credentials.password}
                />
                <div className={classes.checkboxInput}>
                    <input type="checkbox" name='checkbox' />
                    <label htmlFor="checkbox">Запомнить меня</label>
                </div>
                <Button type='submit' text="Войти" />
                <div className={classes.linkAlign}>
                    <Link to="/forgotpassword">Я забыл пароль</Link>
                    <Link style={{ display: "flex", justifyContent: 'flex-end' }} to="/forgotpassword">Войти как тренер</Link>
                </div>
                <div className={classes.lastChild}>
                    <p>Нет аккаунта?</p>
                    <Link to="/forgotpassword">Зарегистрироваться</Link>
                </div>

            </FormContainer>
            <Footer />
        </section>
    );
}

export default Login;
