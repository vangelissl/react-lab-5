import { useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext.jsx';
import '../../styles/slideshow.css';

function Slideshow() {
	const [slideIndex, setSlideIndex] = useState(0);
	const projects = useContext(ProjectsContext);

	if (!projects || projects.length === 0) return null;

	const nextSlide = () => {
		setSlideIndex((prev) => {
			return prev === projects.length - 1 ? 0 : prev + 1;
		});
	};

	const prevSlide = () => {
		setSlideIndex((prev) => {
			return prev === 0 ? projects.length - 1 : prev - 1;
		});
	};

	const goToSlide = (index) => {
		setSlideIndex(index);
	};

	return (
		<>
			<div className="slideshow-container" id="slideshow-container">
				{projects.map((p, index) => (
					<div
						key={p.id}
						className="mySlides fade"
						style={{ display: index === slideIndex ? 'block' : 'none' }}>
						<img src={p.img} alt={p.name} />
						<div className="text">{p.name}</div>
					</div>
				))}

				<a className="prev" onClick={prevSlide}>&#10094;</a>
				<a className="next" onClick={nextSlide}>&#10095;</a>
			</div>
			<br />
			<div id="dots-container" style={{ textAlign: 'center' }}>
				{projects.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === slideIndex ? 'active' : ''}`}
						onClick={() => goToSlide(index)}
					></span>
				))}
			</div>
		</>
	);
}

export default Slideshow