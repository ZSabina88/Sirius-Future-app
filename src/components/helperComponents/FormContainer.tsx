import classes from "../../styles/FormContainer.module.scss";

type Props = {
    title: string,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    children: React.ReactNode
}

const FormContainer: React.FC<Props> = ({ onSubmit, title, children }) => {
    return (
        <section className={classes.formContainer}>
            <h2>{title}</h2>
            <form  onSubmit={onSubmit}>{children}</form>
        </section>
    );
}

export default FormContainer;
