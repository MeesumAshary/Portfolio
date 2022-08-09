import React from 'react';
import './Home.css';

function Home({ myImage }) {
	return (
		<div className='home-page-container'>
			<div className='page-left'>
				<div className='profile-pic-wrapper'>
					<img
						src={require('../../assets/profile-pic.jpg')}
						alt='profilepic'
						className='profile-pic'
					/>
				</div>
			</div>
			<div className='page-right'>
				<div className='Header'>
					<h1 className='fullname'>Meesum Ashary</h1>
					<h3 className='title'>Software Engineer</h3>
				</div>

				<p className='about-text'>
					Full stack software engineering with a strong mechanical engineering
					background. Acknowledged for a proclivity for locating, diagnosing,
					and solving complex mechanical and software problems. Formulates
					technical articles and presentations to communicate clearly with
					colleagues and customers. Holds a Bachelor of Science in Aerospace
					Engineering.
				</p>
			</div>
		</div>
	);
}

export default Home;
