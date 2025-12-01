import {useContext} from 'react';
import { TestimonialsContext } from "../../contexts/TestimonialsContext";

function Grid() {
	const testimonials = useContext(TestimonialsContext);

	if (!testimonials || testimonials.length === 0) return null;

	return (
		<ul className="grid-container">
			{testimonials.map(t => (
				<li key={t.projectId}>
					<article className="testimonial-article">
						<h3><a href={`projects.html#${t.projectId}`}>{t.name}</a></h3>
						<q><i>{t.text}</i></q>
						<p>{`— ${t.author}`}</p>
					</article>
				</li>
			))}
		</ul>
	);
}

export default Grid