import { useState } from 'react';
import '../../styles/popup.css';

function Popup({ isOpen, onClose, onSubmit, question }) {
	const [inputValue, setInputValue] = useState('');

	if (!isOpen) return null;

	const handleOkClick = () => {
		onSubmit(inputValue);
		setInputValue("");
	};

	return (
		<div className="popup" style={{ display: 'flex' }}>
			<div className="popup-content">
				<h3>{question}</h3>
				<input
					type="text"
					placeholder="Type your answer..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)} 
					autoFocus
				/>
				<div className="popup-buttons">
					<button onClick={handleOkClick}>OK</button>
					<button onClick={onClose}>Cancel</button>
				</div>
			</div>
		</div>
	);
}

export default Popup