import { useContext } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext.jsx';
import Card from './Card.jsx';

function Grid() {
	const projects = useContext(ProjectsContext);

	if (!projects) return null;

	const listItems = projects.map(p => {
		return (
			<li key={p.id}>
				<Card id={p.id} name={p.name} country={p.country} features={p.features} img={p.img} />
			</li>
		);
	});

	return (
		<ol className="project-list-container">
			{listItems}
		</ol>
	);
}

export default Grid