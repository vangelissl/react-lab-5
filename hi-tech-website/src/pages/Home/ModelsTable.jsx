

function ModelsTable() {
	return (
		<div className="table-container">
			<article>
				<h2>Available Models</h2>
				<div className="table-body-container">
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
								<td className="plus" colspan="6">+</td>
							</tr>
							<tr>
								<th>SI-01-Watcher</th>
								<td className="plus" colspan="4">+</td>
								<td className="minus" colspan="2">-</td>
							</tr>
							<tr>
								<th>QU-16-Spectre</th>
								<td className="plus" colspan="2">+</td>
								<td className="minus" colspan="4">-</td>
							</tr>
							<tr>
								<th>RM-Solo</th>
								<td className="plus">+</td>
								<td className="minus" colspan="5">-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</article>
		</div>
	);
}

export default ModelsTable