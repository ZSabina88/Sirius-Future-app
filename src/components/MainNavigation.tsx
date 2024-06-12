import Menu from "./Menu";
import classes from "../styles/MainNavigation.module.scss";
import fullLogo from "../assets/Full_Logo_1_.png";
import FreeStudyBox from "./FreeStudyBox";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MainNavigation: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
    const iconPosition = !show ? "burger-icon-close" : "burger-icon-open";
    return (
        <aside>
            <div className={iconPosition}>
                <GiHamburgerMenu size={25} color='#7362BC' onClick={handleClick} />
            </div>
            {show &&
                <div className={classes.panel}>
                    <div className={classes.panelItems}>
                        <img src={fullLogo} alt="Logo of Sirius Future" />
                        <Menu />
                        <FreeStudyBox />
                    </div>
                </div>}
        </aside>
    );
}

export default MainNavigation;
