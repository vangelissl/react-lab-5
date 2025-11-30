

function WhatWeDo() {
	return (
		<div className="article-camera-container">
			<div id="camera-div">
				<img className="camera" src="images\istockphoto-598930712-612x612.jpg" />
			</div>
			<div className="problem-container">
				<article className="article-text">
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
	);
}

export default WhatWeDo