import './notfound.css'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notfound-infos'>   
      <h1>404</h1>
      <p className='notfound-info'>Oups!LA page que vous demandez n'existe pas.</p>
      <Link className='notfound-link' to='/accueil'>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;

