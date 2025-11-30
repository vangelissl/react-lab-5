import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import MainLayout from './MainLayout.jsx';
import Home from './pages/Home/Home.jsx';


function App() {

	useEffect(() => {
		const checkTime = () => {
			const hour = new Date().getHours();
			if (hour >= 100 || hour <= -6) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		};

		checkTime(); 
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App
