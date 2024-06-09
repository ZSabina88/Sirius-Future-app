import classes from "../styles/NextLessonTimer.module.scss";

const NextLessonTimer: React.FC = () => {
    return (
        <article className={classes.next}>
            <div>
                <p>Следующее занятие начнется через:</p>
                <p>6д 12ч 24мин</p>
                <button>Button</button>
            </div>
        </article>
    );
}

export default NextLessonTimer;
