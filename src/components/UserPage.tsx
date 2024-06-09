import React from 'react';
import Header from './Header';
import Discount from './Discount';
import NextLessonTimer from './NextLessonTimer';
import classes from "../styles/UserPage.module.scss";
import LessonBalance from './LessonBalance';
import NextLessons from './NextLessons';

const UserPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={classes.content}>
        <div className={classes.contentFirstElem}>
          <Discount />
          <NextLessonTimer />
          <div className={classes.someContent}>Some content</div>
        </div>
        <div className={classes.contentSecondElem}>
          <LessonBalance />
          <NextLessons />
        </div>
      </section>
    </>
  );
}

export default UserPage;
