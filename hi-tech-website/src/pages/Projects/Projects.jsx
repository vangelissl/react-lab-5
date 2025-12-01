import Navigation from './Navigation.jsx';
import Grid from './Grid.jsx';
import Slideshow from './Slideshow.jsx';
import { ProjectsProvider } from '../../contexts/ProjectsContext.jsx';
import '../../styles/projects.css';

function Projects() {
	return (
		<>
			<ProjectsProvider>
				<Slideshow />
				<div className="projects-container">
					<aside id="project-list">
						<h1>Our Projects</h1>
						<Navigation />
					</aside>
					<main className="victor-mono-regular projects-main">
						<Grid />
					</main>
				</div>
			</ProjectsProvider>
		</>
	);
}

export default Projects