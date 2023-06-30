import './banner.css';
import { useLocation } from 'react-router-dom';
import Image from '../../assets/about.png';
import Img from '../../assets/IMG.png';

function Banner() {
  const location = useLocation();
  const page = location.pathname;

  let image;

  if (page === '/accueil') {
    image = Img;
  } else if (page === '/about') {
    image = Image;
  }

  return (
    <div className={`banner ${page === '/about' ? 'about-banner' : ''}`}>
  <div className="banner-content">
    {page !== '/about' && <h1>Chez vous, partout et ailleurs</h1>}
    <div className='banner-image'>
      <img src={image} alt="Image de bannière" />
    </div>
  </div>
</div>

  );
}

export default Banner;

