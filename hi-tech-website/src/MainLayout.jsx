import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<div className='app-container'>
			<Navbar />
			<main className="victor-mono-regular">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default MainLayout