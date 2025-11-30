import { useState, useEffect } from 'react';
import logo from '../../assets/big-logo-no-text.png';

function CallToAction() {
	const fullText = 'Secure Your City';
	const [displayedText, setDisplayedText] = useState('');

	useEffect(() => {
		let index = 0;

		const intervalId = setInterval(() => {
			if (index < fullText.length){
				setDisplayedText(fullText.slice(0, index + 1));
				index++;
			} else {
				clearInterval(intervalId);
			}
		}, 120);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<header>
			<div id="big-logo">
				<a href="contact.html">
					<img src={logo} />
					<p id="big-logo-motto">{displayedText}</p>
				</a>
			</div>
		</header>
	);
}

export default CallToAction