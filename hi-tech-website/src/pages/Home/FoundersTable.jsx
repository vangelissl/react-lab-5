

function FoundersTable() {

	const founders = [
		{
			name: 'Maria Stashenko',
			role: 'Founder & Head of Product Innovation',
			background: '3+ years in software enginering, student at KNU',
			isFounder: true
		},
		{
			name: 'Alex Carter',
			role: 'CEO',
			background: '10+ years in cybersecurity, ex-Google',
			isFounder: false
		},
		{
			name: 'Sophia Lee',
			role: 'CTO',
			background: 'PhD in AI, led research at MIT',
			isFounder: false
		},
		{
			name: 'David Krasinski',
			role: 'COO',
			background: 'Operations strategist, ex-Microsoft',
			isFounder: false
		},
		{
			name: 'Maria Rossi',
			role: 'CFO',
			background: 'Finance expert, worked at Goldman Sachs',
			isFounder: false
		}
	]

	const cells = founders.map(f => {
		return (
			<tr id={f.isFounder ? 'founder' : undefined}>
				<td>{f.name}</td>
				<td>{f.role}</td>
				<td>{f.background}</td>
			</tr>
		);
	})

	return (
		<div className="table-container">
			<article>
				<h2>Founders</h2>
				<div className="table-body-container" id="founders-container" tabindex="0">
					<table id="founders-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Role</th>
								<th>Background</th>
							</tr>
						</thead>
						<tbody>
							{cells}
						</tbody>
						<tfoot>
							<tr>
								<td colspan="3">Founders of SecureYourCity, {(new Date).getFullYear()}</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</article>
		</div>
	);
}

export default FoundersTable