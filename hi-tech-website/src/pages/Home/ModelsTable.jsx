

function ModelsTable() {
	return (
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
	);
}

export default ModelsTable