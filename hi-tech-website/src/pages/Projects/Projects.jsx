import Navigation from './Navigation.jsx';

function Projects() {
	return (
		<>
			<div class="slideshow-container" id="slideshow-container"></div>
			<br />
			<div id="dots-container" style="text-align:center"></div>
			<div class="container">
				<aside id="project-list">
					<h1>Our Projects</h1>
					<Navigation />
				</aside>
				<main className="victor-mono-regular">
					<ol className="project-list-container">
						<li>
							<article id="kyiv-project">
								<h2>Safe Kyiv Initiative</h2>
								<p><strong>Country:</strong> Ukraine</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>500 connected cameras across public areas</li>
									<li>24/7 monitoring center</li>
									<li>Instant police alerts</li>
									<li>Data stored for 30 days</li>
									<li>Cloud-based infrastructure</li>
								</ul>
								<br />
								<img src="images\cities\Kyiv.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="warsaw-project">
								<h2>Secure Warsaw Program</h2>
								<p><strong>Country:</strong>Poland</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>200 connected cameras in transport system</li>
									<li>Aggressive behavior detection</li>
									<li>Automatic incident reports</li>
									<li>Mobile app integration</li>
									<li>Centralized management</li>
								</ul>
								<br />
								<img src="images\cities\Warsaw.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="berlin-project">
								<h2>Berlin Safety Net</h2>
								<p><strong>Country:</strong>Germany</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>300 connected cameras in parks and metro</li>
									<li>Real-time violence detection</li>
									<li>Accuracy above 97%</li>
									<li>GDPR-compliant privacy measures</li>
									<li>Email and SMS alerts</li>
								</ul>
								<br />
								<img src="images\cities\Berlin.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="london-project">
								<h2>London Guardian Network</h2>
								<p><strong>Country:</strong>United Kingdom</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>400 connected cameras in tourist zones</li>
									<li>Violence hotspot mapping</li>
									<li>Police dashboard access</li>
									<li>Multilingual reporting</li>
									<li>Weekly safety analytics</li>
								</ul>
								<br />
								<img src="images\cities\London.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="toronto-project">
								<h2>Safe Toronto Vision</h2>
								<p><strong>Country:</strong>Canada</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>Full downtown CCTV integration</li>
									<li>Bilingual interface (English/French)</li>
									<li>Behavior anomaly detection</li>
									<li>Secure encrypted connections</li>
									<li>Local server caching</li>
								</ul>
								<br />
								<img src="images\cities\Toronto.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="tokyo-project">
								<h2>Tokyo City Shield</h2>
								<p><strong>Country:</strong>Japan</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>Coverage of metro stations and public squares</li>
									<li>Multi-language support</li>
									<li>Crowd aggression detection</li>
									<li>Event-specific monitoring</li>
									<li>Automated summary reports</li>
								</ul>
								<br />
								<img src="images\cities\Tokyo.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="paris-project">
								<h2>Paris Urban Safety Grid</h2>
								<p><strong>Country:</strong>France</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>Historical trend analysis</li>
									<li>Integration with police command center</li>
									<li>Centralized access permissions</li>
									<li>Violence escalation prediction</li>
									<li>Secure cloud hosting</li>
								</ul>
								<br />
								<img src="images\cities\Paris.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="new-york-city-project">
								<h2>New York City Safety Program</h2>
								<p><strong>Country:</strong>United States</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>10,000 schools connected accross the country</li>
									<li>Real-time alerts to NYPD</li>
									<li>Large-scale CCTV feed processing</li>
									<li>Geo-tagging of incidents</li>
									<li>High availability servers</li>
								</ul>
								<br />
								<img src="images\cities\New York.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="madrid-project">
								<h2>Madrid Smart Safety</h2>
								<p><strong>Country:</strong>Spain</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>Smart integration with municipal cameras</li>
									<li>AI learning from local data</li>
									<li>Encrypted incident storage</li>
									<li>Customizable reporting tools</li>
									<li>Public safety dashboard</li>
								</ul>
								<br />
								<img src="images\cities\Madrid.png" height="400em" />
							</article>
						</li>
						<li>
							<article id="stockholm-project">
								<h2>Stockholm Safe Future</h2>
								<p><strong>Country:</strong>Sweden</p>
								<p><strong>Main Features:</strong></p>
								<ul>
									<li>City-wide deployment across districts</li>
									<li>Cloud + on-prem hybrid servers</li>
									<li>Swedish/Enlish interface</li>
									<li>Advance predictive modeling</li>
									<li>Automated law enforcement dispatch</li>
								</ul>
								<br />
								<img src="images\cities\Stockholm.png" height="400em" />
							</article>
						</li>
					</ol>
				</main>
			</div>
		</>
	);
}

export default Projects