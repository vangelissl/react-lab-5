import ModelsTable from './ModelsTable.jsx';
import FoundersTable from './FoundersTable.jsx';
import { FoundersProvider } from '../../contexts/FoundersContext.jsx';

function TablesSection() {
	return (
		<section id="tables-container">
			<ModelsTable />
			<FoundersProvider>
				<FoundersTable />
			</FoundersProvider>
		</section>
	);
}

export default TablesSection