import { Auth } from './Auth';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

export const Header = () => {
  return (
    <header className='header'>
    <h1>
      <Link to={"/"}><img src={logo} alt="logo" width="270" height="110" /></Link>
      </h1>
    <nav>
      <Auth />
    </nav>
    </header>
  );
};
