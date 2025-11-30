import { useContext, useState } from 'react';
import { FoundersContext } from '../../contexts/FoundersContext.jsx';
import Popup from './Popup.jsx';

function FoundersTable() {
	const founders = useContext(FoundersContext);

	const [showPopup, setShowPopup] = useState(false);

	const riddle = "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?";
	const correctAnswer = 'Keyboard';

	const handleMouseEnter = (isFounder) => {
		if(isFounder){
			setShowPopup(true);
		}
	};

	const handleAnswerSubmit = (userAnswer) => {
		if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
			alert('You answered correctly!');
		} else if (userAnswer) {
			alert('You answered incorrectly, try again');
		} else{
			alert('Enter the answer');
		}
		setShowPopup(false);
	}

	if (!founders) return null;

	const cells = founders.map(f => {
		return (
			<tr 
			key={f.name} 
			id={f.isFounder ? 'founder' : undefined}
			onMouseEnter={() => handleMouseEnter(f.isFounder)}>
				<td>{f.name}</td>
				<td>{f.role}</td>
				<td>{f.background}</td>
			</tr>
		);
	});

	return (
		<div className="table-container">
			<article>
				<h2>Founders</h2>
				<div className="table-body-container" id="founders-container" tabIndex="0">
					<table id="founders-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Role</th>
								<th>Background</th>
							</tr>
						</thead>
						<tbody>
							{cells}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="3">Founders of SecureYourCity, {new Date().getFullYear()}</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<Popup
				isOpen={showPopup}
				question={riddle}
				onClose={() => setShowPopup(false)}
				onSubmit={handleAnswerSubmit}
				/>
			</article>
		</div>
	);
}

export default FoundersTable