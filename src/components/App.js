import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import location from '../pages/Locations/location';
import notfound from '../pages/NotFound/notfound';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Banner from './banner/banner';


function App() {
    return (
    
      <Router>
        <Header/>
        <Banner />
        <Routes>
          <Route path="/accueil" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/location" element={location} />
          <Route path="/notfound" element={notfound} />
          <Route path="*" element={<Navigate to="/notfound"/>}/>
          </Routes>
          <Footer/>
      </Router>
    );
  }
  
  export default App;
