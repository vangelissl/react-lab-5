import Navigation from './Navigation.jsx';
import Grid from './Grid.jsx';
import Slideshow from './Slideshow.jsx';
import { ProjectsProvider } from '../../contexts/ProjectsContext.jsx';

function Projects() {
	return (
		<>
			<ProjectsProvider>
				<Slideshow />
				<div className="container">
					<aside id="project-list">
						<h1>Our Projects</h1>
						<Navigation />
					</aside>
					<main className="victor-mono-regular">
						<Grid />
					</main>
				</div>
			</ProjectsProvider>
		</>
	);
}

export default Projects