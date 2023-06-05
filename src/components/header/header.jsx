import logo from '../../assets/logo.png';
import './header.css'
import { Link } from 'react-router-dom';

 function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={logo} alt="kasa-logo" />
			</h1>
			<nav>
        <ul>
          <li>
            <Link to="/accueil">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
		</header>
	)
}

export default Header