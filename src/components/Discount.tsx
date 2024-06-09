import classes from "../styles/Discount.module.scss";
import cosmonaut from "../assets/SF_2 1.png";


const Discount: React.FC = () => {
  return (
    <article className={classes.discount}>
      <p>До 31 декабря любой курс со скидкой 20%</p>
      <p>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
      <img src={cosmonaut} alt="cosmonaut bear with presents" />
    </article>
  );
}

export default Discount;
