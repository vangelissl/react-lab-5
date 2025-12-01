import { useContext } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext.jsx';

function Navigation() {
	const projects = useContext(ProjectsContext);

	if (!projects || projects.length === 0) return null;


	return (
		<nav>
			<ol id="side-nav">
				{projects.map((p => (
					<li>
						<a href={`#${p.id}`}>{p.name}</a>
					</li>
				)))}
			</ol>
		</nav >
	);
}

export default Navigation