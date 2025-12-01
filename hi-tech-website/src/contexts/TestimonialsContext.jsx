import {createContext, useState} from 'react';
import { testimonialsList as initialData} from '../data/data';

export const TestimonialsContext = createContext(null);

export const TestimonialsProvider = ({children}) => {
	const [testimonials, setTestimonials] = useState(initialData);

	return <TestimonialsContext.Provider value={testimonials}>
		{children}
	</TestimonialsContext.Provider>
}