import {useContext} from 'react';
import { TestimonialsContext } from "../../contexts/TestimonialsContext";

function Grid() {
	const testimonials = useContext(TestimonialsContext);

	if (!testimonials || testimonials.length === 0) return null;

	return (
		<ul class="grid-container">
			{testimonials.map(t => (
				<li key={t.projectId}>
					<aticle>
						<h3><a href={`projects.html#${t.projectId}`}>{t.name}</a></h3>
						<q><i>{t.text}</i></q>
						<p>{`&mdash; ${t.author}`}</p>
					</aticle>
				</li>
			))}
		</ul>
	);
}

export default Grid