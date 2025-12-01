import Navigation from './Navigation.jsx';
import Grid from './Grid.jsx';
import Slideshow from './Slideshow.jsx';

function Projects() {
	return (
		<>
			<Slideshow />
			<div class="container">
				<aside id="project-list">
					<h1>Our Projects</h1>
					<Navigation />
				</aside>
				<main className="victor-mono-regular">
					<Grid />
				</main>
			</div>
		</>
	);
}

export default Projects