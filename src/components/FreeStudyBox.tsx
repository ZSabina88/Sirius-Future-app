import classes from "../styles/FreeStudyBox.module.scss";
import gift from "../assets/gift illustration.png";

const FreeStudyBox: React.FC = () => {
    return (
        <section className={classes.box}>
            <div>
                <h4>Учитесь бесплатно</h4>
                <p>Приводите друзей с детьми заниматься в Sirius Future
                    и получайте подарки!</p>
                <button>Узнать</button>
            </div>
            <img src={gift} alt="gift illustration" />
        </section>
    );
}

export default FreeStudyBox;
