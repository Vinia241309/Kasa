import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Location from './pages/Locations/location';
import NotFound from './pages/NotFound/notfound';
import Layout from './components/layout/layout';



function App() {
  return (
    <Router>
  
     <Layout>
        <Routes>
          <Route path="/accueil" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location:id" element={<Location />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404"/>}/>
        </Routes>
        </Layout>
    </Router>
  );
}

export default App;
