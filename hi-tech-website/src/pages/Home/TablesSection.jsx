import ModelsTable from './ModelsTable.jsx';

function TablesSection() {
	return (
		<section id="tables-container">
			<ModelsTable/>
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
	);
}

export default TablesSection