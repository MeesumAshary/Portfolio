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
		</div>
	);
}

export default Home;
