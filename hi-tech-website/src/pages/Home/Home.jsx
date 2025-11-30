

function Home() {
	return (
		<main class="victor-mono-regular">
			<header>
				<div id="big-logo">
					<a href="contact.html">
						<img src="images\big-logo-no-text.png" />
						<p id="big-logo-motto">Secure Your City</p>
					</a>
				</div>
			</header>
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
			<section id="tables-container">
				<div class="table-container">
					<article>
						<h2>Available Models</h2>
						<div class="table-body-container">
							<table id="models-table">
								<caption><b>Models' Types of Violence Detection</b></caption>
								<thead>
									<tr>
										<th></th>
										<th>Lethal</th>
										<th>Non-lethal</th>
										<th>Sexual</th>
										<th>Harrassment</th>
										<th>Theft</th>
										<th>Property Damage</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>SAU-03-Eye</th>
										<td class="plus" colspan="6">+</td>
									</tr>
									<tr>
										<th>SI-01-Watcher</th>
										<td class="plus" colspan="4">+</td>
										<td class="minus" colspan="2">-</td>
									</tr>
									<tr>
										<th>QU-16-Spectre</th>
										<td class="plus" colspan="2">+</td>
										<td class="minus" colspan="4">-</td>
									</tr>
									<tr>
										<th>RM-Solo</th>
										<td class="plus">+</td>
										<td class="minus" colspan="5">-</td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
				</div>
				<div class="table-container">
					<article>
						<h2>Founders</h2>
						<div class="table-body-container" id="founders-container" tabindex="0">
							<table id="founders-table">
								<thead>
									<tr>
										<th>Name</th>
										<th>Role</th>
										<th>Background</th>
									</tr>
								</thead>
								<tbody>
									<tr id="founder">
										<td>Maria Stashenko</td>
										<td>Founder & Head of Product Innovation</td>
										<td>3+ years in software engineering, student at KNU</td>
									</tr>
									<tr>
										<td>Alex Carter</td>
										<td>CEO</td>
										<td>10+ years in cybersecurity, ex-Google</td>
									</tr>
									<tr>
										<td>Sophia Lee</td>
										<td>CTO</td>
										<td>PhD in AI, led research at MIT</td>
									</tr>
									<tr>
										<td>David Krasinski</td>
										<td>COO</td>
										<td>Operations strategist, ex-Microsoft</td>
									</tr>
									<tr>
										<td>Maria Rossi</td>
										<td>CFO</td>
										<td>Finance expert, worked at Goldman Sachs</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="3">Founders of SecureYourCity, 2025</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</article>
				</div>
			</section>
			<div id="popup" class="popup">
				<div class="popup-content">
					<h3 id="popup-question">What is your name?</h3>
					<input type="text" id="popup-input" placeholder="Type your answer..." />
					<div class="popup-buttons">
						<button id="okBtn">OK</button>
						<button id="cancelBtn">Cancel</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home