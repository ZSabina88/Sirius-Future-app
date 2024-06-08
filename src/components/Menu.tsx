import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navlist, navicon } from '../utility/navlist';
import classes from "../styles/Menu.module.scss";


const Menu: React.FC = () => {
    const [activeTab, setactiveTab] = useState<string>("главная");

    const navList = navlist.map((list) =>
      <li key={list.id} className={classes.navText}>
        <Link to={list.to}
          className={activeTab === `${list.to}` ? "active" : ""}
          onClick={() => setactiveTab(`${list.to}`)}
          >{list.list}</Link>
      </li>
    );
  
    const navIcon = navicon.map((list) =>
      <li key={list.id}>
        <Link to={list.to}
          className={activeTab === `${list.to}` ? "active" : ""}
          onClick={() => setactiveTab(`${list.to}`)}
          >{list.icon}</Link>
      </li>
    );
  
    return (
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {navIcon}
        </ul>
        <ul className={classes.navList}>
          {navList}
        </ul>
      </nav>
  
  
    );
}

export default Menu;
