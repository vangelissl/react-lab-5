

function ModelsTable() {
	const modelsList = [
		{
			name: 'SAU-03-Eye',
			lethal: true,
			nonLethal: true,
			sexual: true,
			harrassment: true,
			theft: true,
			propertyDamage: true
		},
		{
			name: 'SI-01-Watcher',
			lethal: true,
			nonLethal: true,
			sexual: true,
			harrassment: true,
			theft: false,
			propertyDamage: false
		},
		{
			name: 'QU-16-Spectre',
			lethal: true,
			nonLethal: true,
			sexual: false,
			harrassment: false,
			theft: false,
			propertyDamage: false
		},
		{
			name: 'RM-Solo',
			lethal: true,
			nonLethal: false,
			sexual: false,
			harrassment: false,
			theft: false,
			propertyDamage: false
		}
	]

	const cells = modelsList.map(m => {
		const booleanValues = Object.values(m).filter(val => typeof val === 'boolean');
		const plusCount = booleanValues.filter(val => val === true).length;
		const minusCount = booleanValues.length - plusCount;

		return (
			<tr>
				<th>{m.name}</th>
				{(plusCount > 0) && <td className="plus" colspan={plusCount}>+</td>}
				{(minusCount > 0) && <td className="minus" colspan={minusCount}>-</td>}
			</tr>
		);
	});

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
							{cells}
						</tbody>
					</table>
				</div>
			</article>
		</div>
	);
}

export default ModelsTable