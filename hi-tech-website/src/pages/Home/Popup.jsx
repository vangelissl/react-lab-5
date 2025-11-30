

function Popup() {
	return (
		<div id="popup" class="popup">
			<div class="popup-content">
				<h3 id="popup-question">What is your name?</h3>
				<input type="text" id="popup-input" placeholder="Type your answer..." />
				<div class="popup-buttons">
					<button id="okBtn">OK</button>
					<button id="cancelBtn">Cancel</button>
				</div>
			</div>
		</div>
	);
}

export default Popup