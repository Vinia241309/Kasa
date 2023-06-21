import logo from '../../assets/logo.png';
import './header.css'
import { Link, NavLink } from 'react-router-dom';

 function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={logo} alt="kasa-logo" />
			</h1>
			<nav>
        <ul>
          <li>
            <NavLink to="/accueil" exact activeClassName="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeClassName="active">A Propos</NavLink>
          </li>
        </ul>
      </nav>
		</header>
	)
}

export default Header