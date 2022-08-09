import React from 'react';

function Contact(props) {
	return (
		<div>
			<form>
				<label class='your-name'>
					Your Name:
					<input id='your-name' type='name' name='email' type='text' />
				</label>
				<label class='your-email'>
					Your email:
					<input id='your-email' type='email' name='email' type='text' />
				</label>
				<label class='your-message'>
					Your message:
					<textarea id='textarea-message' name='message' type='text'></textarea>
				</label>

				<button type='submit'>Send</button>
			</form>
		</div>
	);
}

export default Contact;
