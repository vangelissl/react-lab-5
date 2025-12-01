
function Card({ projectId, name, text, author }) {
	return (
		<article className="testimonial-article">
			<h3><a href={`/projects#${projectId}`}>{name}</a></h3>
			<q><i>{text}</i></q>
			<p>{`— ${author}`}</p>
		</article>
	);
}

export default Card