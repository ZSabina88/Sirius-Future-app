import classes from "../styles/UserMenu.module.scss";
import { IoMdArrowDropup } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type Prop = {
    onClick?: ()=> void
}

const UserMenu: React.FC<Prop> = ({onClick}) => {
    return (
        <section>
            <span className={classes.arrowIcon}><IoMdArrowDropup size="25px" color="#7362BC"/></span>
            <article className={classes.userMenu}>
            <span onClick={onClick} className={classes.closeIcon}><IoClose color="#7362BC"/></span>
                <p>Смена пользователя</p>
                <div>
                    <span className={classes.img1}></span>
                    <p>Михаил</p>
                </div>
                <div>
                    <span className={classes.img2}></span>
                    <p>Анна</p>
                </div>
                <div className={classes.exit}>
                <button>Выход</button>
                <FaArrowRightFromBracket color="#008AFF"/>
                </div>
            </article>
        </section>

    );
}

export default UserMenu;
