import React from 'react';

function Home({ myImage }) {
	return (
		<div>
			<div className='profile-pic-wrapper'>
				<img
					src={require('../../assets/profile-pic.jpg')}
					alt='profilepic'
					className='profile-pic'
				/>
			</div>
			<div className='Header'>
				<h1>Meesum Ashary</h1>
				<h2>Software Engineer</h2>
			</div>
			<p className='about-text'>
				Full stack software engineering with a strong mechanical engineering
				background. Acknowledged for a proclivity for locating, diagnosing, and
				solving complex mechanical and software problems. Formulates technical
				articles and presentations to communicate clearly with colleagues and
				customers. Holds a Bachelor of Science in Aerospace Engineering.
			</p>
		</div>
	);
}

export default Home;
