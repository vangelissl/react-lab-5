import Grid from './Grid.jsx';
import { TestimonialsProvider } from '../../contexts/TestimonialsContext.jsx';
import '../../styles/testimonials.css';

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