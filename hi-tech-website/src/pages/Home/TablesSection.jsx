import ModelsTable from './ModelsTable.jsx';
import FoundersTable from './FoundersTable.jsx';
import { FoundersProvider } from '../../contexts/FoundersContext.jsx';
import { ModelsProvider } from '../../contexts/ModelsContext.jsx';

function TablesSection() {
	return (
		<section id="tables-container">
			<ModelsProvider>
				<ModelsTable />
			</ModelsProvider>

			<FoundersProvider>
				<FoundersTable />
			</FoundersProvider>
		</section>
	);
}

export default TablesSection