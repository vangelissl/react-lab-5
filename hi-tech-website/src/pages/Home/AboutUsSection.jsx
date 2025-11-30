import WhatWeDo from './WhatWeDo.jsx';
import WhatWeSolve from './WhatWeSolve.jsx'

function AboutUsSection() {
	return (
		<section>
			<WhatWeDo />
			<WhatWeSolve />
			<div id="mission-container">
				<article class="article-text">
					<div id="mission-content-container">
						<iframe
							src="https://www.youtube.com/embed/CJ3dAAna7jQ?si=_oDaZ7X4zpTRkaN5&amp;controls=0&loop=1&autoplay=1&mute=1&rel=0&playlist=CJ3dAAna7jQ"
							title="YouTube video player" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
						</iframe>
						<div id="mission-title-container">
							<h2>Our Mission:</h2>
							<ul>
								<li>Reduce crime by more than 75%</li>
								<li>Connect our system to the CCTV network of 5,000 cities</li>
								<li>Advance the responsible use of AI for the good of humanity</li>
							</ul>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}

export default AboutUsSection