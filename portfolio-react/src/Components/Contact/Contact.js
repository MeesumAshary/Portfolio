import React from 'react';
import './Contact.css';

function Contact(props) {
	return (
		<div className='contact-page-container'>
			<h1>Contact Me!</h1>
			<div className='social-container'>
				<a href='mailto:meesumashary@gmail.com' className='social'>
					<div className='social-img-wrapper'>
						<img
							className='social-icon'
							src={require('../../assets/Gmail.png')}
							alt=''
						/>
					</div>
				</a>
				<a href='https://github.com/MeesumAshary' className='social'>
					<div className='social-img-wrapper'>
						<img
							className='social-icon'
							src={require('../../assets/GitHub-logo.png')}
							alt=''
						/>
					</div>
				</a>
				<a href='https://www.linkedin.com/in/meesumashary/' className='social'>
					<div className='social-img-wrapper'>
						<img
							className='social-icon'
							src={require('../../assets/LinkedIn-logo.png')}
							alt=''
						/>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Contact;
