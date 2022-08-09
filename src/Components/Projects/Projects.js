import React from 'react';
import './Projects.css';

function Projects(props) {
	return (
		<div className='project-page-container'>
			<div className='card'>
				<div className='card-header'>
					<h2>Moving Co, React-Java Blog App</h2>
					<div className='card-img-wrapper'>
						<a href='https://movingco.netlify.app/'>
							<img
								className='card-img'
								src={require('../../assets/Moving-co.png')}
								alt='movingco app screenshot'
							/>
						</a>
					</div>
				</div>
				<div className='card-content'>
					<h3>
						<span className='skills-span'>Skills:</span> HTML, CSS, JavaScript
						React, Axios , Postgresql, Java, SpringBoot{' '}
					</h3>
					<ul className='card-role-description'>
						<li className='card-rd-list'>
							- Utilized Java to create a Backend Rest API with full CRUD
							functionalities and JWT authentication and Authorization.
						</li>
						<li className='card-rd-list'>
							- Designed control React components that signed up and logged in
							users. These users were configured to be authorized and create
							blog posts.
						</li>
						<li className='card-rd-list'>
							- Utilized CSS to make the app responsive and utilized semantic
							HTML to make App more accessible.
						</li>
					</ul>
				</div>
			</div>

			<div className='card'>
				<div className='card-header'>
					<h2>Gitz Carlton- MERN Full CRUD App</h2>
					<div className='card-img-wrapper'>
						<a href='https://cozy-gnome-816bc0.netlify.app/'>
							<img
								className='card-img'
								src={require('../../assets/Gitz-Carlton.png')}
								alt='movingco app screenshot'
							/>
						</a>
					</div>
				</div>
				<div className='card-content'>
					<h3>
						<span className='skills-span'>Skills:</span> HTML, CSS, JavaScript,
						React, Axios , MongoDb, Express
					</h3>
					<ul className='card-role-description'>
						<li className='card-rd-list'>
							-Designed controlled react components that creates, returns,
							updates and deletes guest data and allows user to assign a room to
							the guest.
						</li>
						<li className='card-rd-list'>
							-Utilized git, GitHub to collaborate with fellow contributors by
							using a mix of Feature Branch workflow and GitFlow workflow
							methods.
						</li>
						<li className='card-rd-list'>
							-Utilized CSS to make the app responsive and utilized semantic
							HTML to make App more accessible.
						</li>
					</ul>
				</div>
			</div>

			<div className='card'>
				<div className='card-header'>
					<h2>Moving Co, React-Java Blog Site</h2>
					<div className='card-img-wrapper'>
						<a href='https://beamish-cassata-95fe05.netlify.app/'>
							<img
								className='card-img'
								src={require('../../assets/MeesX.png')}
								alt='movingco app screenshot'
							/>
						</a>
					</div>
				</div>
				<div className='card-content'>
					<h3>
						<span className='skills-span'>Skills:</span> HTML, CSS, JavaScript,
						React, Axios
					</h3>
					<ul className='card-role-description'>
						<li className='card-rd-list'>
							-Designed Single-Page React application that utilizes Axios to
							fetch and display SpaceX API Data{' '}
						</li>
						<li className='card-rd-list'>
							-Included 8 components and 2 forms of interaction by user: data
							displayed and styled by CSS.
						</li>
						<li className='card-rd-list'>
							-Utilized CSS to make the app responsive and utilized semantic
							HTML to make App more accessible.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Projects;
