import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className='text-center'>
          <p className='text-3xl font-bold mb-10'>Technical Test</p>
          <p className='text-2xl'>Hi, i'm Jonathan Eka Ratmoko</p>
          <p>as Frontend Developer</p>
          <div className='flex-button-content'>
            <Link to="/soal-1">
              <button className="before:ease skew-button">
                <span className="relative z-10">Soal 1</span>
              </button>
            </Link>
            <Link to="/soal-2">
              <button className="before:ease skew-button">
                <span className="relative z-10">Soal 2</span>
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home
