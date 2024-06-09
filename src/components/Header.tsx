import classes from "../styles/Header.module.scss";
import UserIcon from './helperComponents/UserIcon';
import { TiMessages } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle)
  };


  return (
    <>
      <header>
        <div className={classes.header}>
          <p>Добро пожаловать, <span style={{ color: "#7362BC" }}>Михаил</span>!</p>
          <div className={classes.iconPosition}>
            <UserIcon><TiMessages size="30px" color="#79747F" /></UserIcon>
            <UserIcon><span className={classes.userImg}></span></UserIcon>
            <span onClick={handleClick}>
              <IoIosArrowDown color="#7362BC"/>
            </span>
            {toggle && <UserMenu onClick={handleClick}/>}
          </div>
        </div >
      </header>
    </>

  );
}

export default Header;