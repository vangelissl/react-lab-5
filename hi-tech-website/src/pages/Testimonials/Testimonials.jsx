import Grid from './Grid.jsx';
import { TestimonialsProvider } from '../../contexts/TestimonialsContext.jsx';

function Testimonials() {
	return (
		<main>
			<h1>Testimonials From Our Partners</h1>
			<TestimonialsProvider>
				<Grid />
			</TestimonialsProvider>
		</main>
	);
}

export default Testimonials