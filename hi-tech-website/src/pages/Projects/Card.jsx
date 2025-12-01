function Card({ id, name, country, features, img }) {
	return (
		<article id={id}>
			<h2>{name}</h2>
			<p><strong>Country: </strong>{country}</p>
			<p><strong>Main Features:</strong></p>
			<ul>
				{features.map(f => <li>{f}</li>)}
			</ul>
			<br />
			<img src={img} height="400em" />
		</article>
	);
}

export default Card