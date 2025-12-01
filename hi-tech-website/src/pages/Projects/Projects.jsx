import Navigation from './Navigation.jsx';
import Grid from './Grid.jsx';

function Projects() {
	return (
		<>
			<div class="slideshow-container" id="slideshow-container"></div>
			<br />
			<div id="dots-container" style="text-align:center"></div>
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