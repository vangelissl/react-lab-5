import logo from '../../assets/big-logo-no-text.png';

function CallToAction(){
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