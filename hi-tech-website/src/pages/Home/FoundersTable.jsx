import {useContext} from 'react';
import { FoundersContext } from '../../contexts/FoundersContext.jsx';

function FoundersTable() {

	const founders = useContext(FoundersContext);

	if (!founders) return null;

	const cells = founders.map(f => {
		return (
			<tr key={f.name} id={f.isFounder ? 'founder' : undefined}>
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
				<div className="table-body-container" id="founders-container" tabIndex="0">
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
								<td colSpan="3">Founders of SecureYourCity, {new Date().getFullYear()}</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</article>
		</div>
	);
}

export default FoundersTable