import React from 'react';
import Header from './Header';
import Discount from './Discount';
import NextLesson from './NextLesson';
import classes from "../styles/UserPage.module.scss";

const UserPage: React.FC = () => {
  return (
    <div>
        <Header/>
      <section style={{marginLeft: "25%"}}>
        <Discount/>
        <NextLesson/>
        <div className={classes.someContent}>Some content</div>
      </section>
    </div>
  );
}

export default UserPage;
