import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {

    let title = "An error occured!";
    let message = "Something went wrong!";


    return (
        <>
            <MainNavigation />
            <menu className="pageError">
                <h1>{title}</h1>
                <p>{message}</p>
            </menu>
        </>
    );
}

export default ErrorPage;
