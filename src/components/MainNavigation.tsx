import Menu from "./Menu";
import classes from "../styles/MainNavigation.module.scss";
import fullLogo from "../assets/Full_Logo_1_.png";
import FreeStudyBox from "./FreeStudyBox";

const MainNavigation: React.FC = () => {
    return (
        <div className={classes.panel}>
            <div className={classes.panelItems}>
                <img src={fullLogo} alt="Logo of Sirius Future" />
                <Menu />
                <FreeStudyBox/>
            </div>
        </div>
    );
}

export default MainNavigation;
