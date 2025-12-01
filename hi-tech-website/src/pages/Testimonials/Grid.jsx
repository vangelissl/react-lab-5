import { useContext } from 'react';
import Card from './Card.jsx';
import { TestimonialsContext } from "../../contexts/TestimonialsContext";

function Grid() {
	const testimonials = useContext(TestimonialsContext);

	if (!testimonials || testimonials.length === 0) return null;

	return (
		<ul className="grid-container">
			{testimonials.map(t => (
				<li key={t.projectId}>
					<Card projectId={t.projectId} name={t.name} text={t.text} author={t.author} />
				</li>
			))}
		</ul>
	);
}

export default Grid