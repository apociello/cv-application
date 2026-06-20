import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home-info">
      <h1>Build Your Professional CV in Minutes</h1>
      <p>Fill in your details, we handle the rest.</p>
      <button onClick={() => navigate('/create')}>Create CV</button>
    </main>
  );
}

export default HomePage;
