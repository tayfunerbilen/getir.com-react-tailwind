import Header from 'components/Header'
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

function App() {

	return (
		<>
			<Header />
			<HeroSection />
			<Categories />
			<div className="grid gap-y-6 py-6 pb-14 container mx-auto">
				<Campaigns />
				<Favorites />
				<MobileApp />
				<Cards />
			</div>
			<Footer />
		</>
	);
}

export default App;
