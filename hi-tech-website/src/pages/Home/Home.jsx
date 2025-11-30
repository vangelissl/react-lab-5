import CallToAction from './CallToAction.jsx';
import AboutUsSection from './AboutUsSection.jsx';
import TablesSection from './TablesSection.jsx';
import '../../styles/home.css';

function Home() {
	return (
		<>
			<main className="victor-mono-regular">
				<CallToAction />
				<AboutUsSection />
				<TablesSection />
			</main>
		</>
	);
}

export default Home