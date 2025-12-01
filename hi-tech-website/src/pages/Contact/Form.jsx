function Form() {
	return (
		<form method="post">
			<fieldset id="personal-info">
				<legend>Personal Information</legend>
				<div class="personal-container">
					<label for="fname">First name:</label>
					<label for="lname">Last name:</label>
					<input type="text" id="fname" name="fname" placeholder="John" required />
					<input type="text" id="lname" name="lname" placeholder="Doe" required />
					<label for="email">Email:</label>
					<label for="age">Age:</label>
					<input type="email" id="email" name="email" placeholder="example@email.com" required />
					<input type="number" id="age" name="age" min="13" max="100" required />
					<label for="education">Education:</label>
					<label for="position">Current position:</label>
					<select id="education-levels" name="education-levels">
						<option value="unfinished-secondary">Unfinished Secondary</option>
						<option value="complete-secondary">Complete Secondary</option>
						<option value="unfinished-higher">Unfinished Higher</option>
						<option value="professional">Professional</option>
						<option value="bachelor-degree">Bachelor's Degree</option>
						<option value="master-degree">Master's Degree</option>
						<option value="phd">PhD</option>
					</select>
					<select id="positions" name="positions">
						<option value="scientist">Scientist</option>
						<option value="engineer">Engineer</option>
						<option value="investor">Investor</option>
						<option value="promoter">Promoter</option>
						<option value="gov-official">Government official</option>
					</select>
				</div>
			</fieldset>
			<fieldset id="business-info">
				<legend>Business Information</legend>
				<label for="appeal-purpose">Appeal purpose</label>
				<select id="purpose-options" name="purpose-options">
					<option value="cooperation">Cooperation</option>
					<option value="ownership-complaint">Ownership Complaint</option>
					<option value="offer">Offer</option>
					<option value="bug-report">Bug Report</option>
				</select>
				<label for="details">Details:</label>
				<div id="details-container">
					<textarea id="details" name="details" rows="5" cols="40" maxlength="500"></textarea>
				</div>
			</fieldset>
			<div class="agreement-container">
				<input type="checkbox" id="agreement" name="agreement" required />
				<label for="agreement">I agree to the
					<a href="https://policies.google.com/privacy?hl=en-US">
						Privacy Policy
					</a>
				</label>
			</div>
			<input type="submit" value="Send" />
		</form>
	);
}

export default Form