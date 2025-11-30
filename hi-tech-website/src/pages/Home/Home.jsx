import CallToAction from './CallToAction.jsx';

function Home() {
	return (
		<>
			<CallToAction/>
			
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
		</>
	);
}

export default Home