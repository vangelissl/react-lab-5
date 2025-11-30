import { createContext, useState } from 'react';
import { modelsList as initialData } from '../data/data.js';

export const ModelsContext = createContext(null);

export const ModelsProvider = ({ children }) => {
	const [models, setModels] = useState(initialData);

	return (
		<ModelsContext.Provider value={models}>
			{children}
		</ModelsContext.Provider>
	);
};