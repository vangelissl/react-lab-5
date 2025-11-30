import {createContext, useState} from 'react';
import {foundersList as initialData} from '../data/data.js';

export const FoundersContext = createContext(null);

export const FoundersProvider = ({children}) => {
	const [founders, setFounders] = useState(initialData);

	return (
		<FoundersContext.Provider value={founders}>
			{children}
		</FoundersContext.Provider>
	);
};