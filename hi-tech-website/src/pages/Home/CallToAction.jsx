import { useEffect } from 'react';
import logo from '../../assets/big-logo-no-text.png';

function CallToAction() {

	useEffect(() => {
		const motto = document.getElementById('big-logo-motto');

		if (motto) {
			const mottoText = motto.textContent;
			let id = setInterval(frame, 120);
			motto.textContent = "";
			let counter = 0;

			function frame() {
				if (counter === mottoText.length) {
					clearInterval(id);
				} else {
					motto.textContent += mottoText[counter];
					counter++;
				}
			}
		}
	});

	return (
		<header>
			<div id="big-logo">
				<a href="contact.html">
					<img src={logo} />
					<p id="big-logo-motto">Secure Your City</p>
				</a>
			</div>
		</header>
	);
}

export default CallToAction