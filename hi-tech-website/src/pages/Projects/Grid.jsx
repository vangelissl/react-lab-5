import { useContext } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext.jsx';

function Grid() {
	const projects = useContext(ProjectsContext);

	if (!projects) return null;

	const listItems = projects.map(p => {
		return (
			<li key={p.id}>
				<article id={p.id}>
					<h2>{p.name}</h2>
					<p><strong>Country: </strong>{p.country}</p>
					<p><strong>Main Features:</strong></p>
					<ul>
						{p.features.map(f => <li>{f}</li>)}
					</ul>
					<br />
					<img src={p.img} height="400em" />
				</article>
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