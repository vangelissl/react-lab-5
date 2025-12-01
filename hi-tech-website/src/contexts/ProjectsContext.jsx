import {createContext, useState} from 'react';
import {projectsList as initialData} from '../data/data.js';

export const ProjectsContext = createContext(null);

export const ProjectsProvider = ({children}) => {
	const [projects, setProjects] = useState(initialData);

	return (
		<ProjectsContext.Provider value={projects}>
			{children}
		</ProjectsContext.Provider>
	);
};