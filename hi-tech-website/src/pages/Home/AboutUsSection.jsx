

function AboutUsSection() {
	return (
		<section>
			<div class="article-camera-container">
				<div id="camera-div">
					<img class="camera" src="images\istockphoto-598930712-612x612.jpg" />
				</div>
				<div class="problem-container">
					<article class="article-text">
						<h2>What We Do</h2>
						<p>
							We are <abbr title="Secure Your City">SYC</abbr> - a company that provides low-latency
							signal
							AI-driven
							systems
							of violent human behavior detection.
							Our system connects to the network of CCTV cameras and collects video stream data in
							real-time.
							Processing is happening as soon as required data has been transfered to our servers.
							Once the targeted behavior is detected it then sends a signal along with metadata which
							includes
							facial features and overall appearance of the offender.
						</p>
					</article>
				</div>
			</div>
			<div class="article-camera-container">
				<img class="camera"
					src="images\realistic-video-surveillance-camera-side-view-vector-illustration_1284-66719.jpg"
					height="250em" />
				<div class="problem-container">
					<article class="article-text">
						<h2>What Problem Do We Solve</h2>
						<p id="purpose">
							Our system operates on a network of CCTV cameras to help you detect
							and identify criminals faster. We help reduce crimes by identfying them during occurence
							Today, almost every street of any city is full of survalliance cameras.
							While they provide assistance in solving a mystery - we help do it in time.
						</p>
					</article>
				</div>
			</div>
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