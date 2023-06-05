import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery'; 
import Img from '../../assets/IMG.png';


function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner image={Img}/>
			<Gallery />
            <Footer />
			
		</div>
		
	)
}

export default Home;