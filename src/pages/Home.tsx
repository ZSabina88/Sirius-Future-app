import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ margin: "25% auto 0 50%", color: "#008AFF"}}>
      <Link to="/login">Bойдите в аккаунт</Link>
    </div>
  );
}

export default HomePage;
