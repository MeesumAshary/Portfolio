import React from 'react';

function Skills(props) {
	// const skillsIcons = {
	// 	python: '../../assets/Skills-icons/Python-icon.png',
	// 	javaScript: '../../assets/Skills-icons/JS-icon.png',
	// 	react:
	// 		'../../assets/Skills-icons/ionic-react-icon-react-native-pngreact-logo-free-transparent-png-images-pngaaacom.png',
	// 	java: '../../assets/Skills-icons/Java-icon.jpg',
	// 	html: '../../assets/Skills-icons/HTML-icon.png',
	// 	css: '../../assets/Skills-icons/CSS-icon.png',
	// 	bootstrap: '../../assets/Skills-icons/bootstrap-lcon.png',
	// 	django: '../../assets/Skills-icons/Django-icon.png',
	// 	springBoot: '../../assets/Skills-icons/Spring-icon.png',
	// 	express:
	// 		'../../assets/Skills-icons/node-js-javascript-npm-express-js-sharp.jpeg',
	// 	mongoDB: '../../assets/Skills-icons/MongoDB-icon.jpeg',
	// 	psql: '../../assets/Skills-icons/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.png',
	// 	matlab: '../../assets/Skills-icons/Matlab-lcon.png',
	// 	solidworks: '../../assets/Skills-icons/solidworks-icon.png',
	// };

	return (
		<div>
			<div className='skills-header'>
				<h1>My Skills</h1>
			</div>
			<div className='skill-list-container'>
				<div className='lang-container'>
					<h2 className='skills-category-heading'>Porgramming Languages</h2>
					<li className='skill-list-item'>
						<img
							src={require('../../assets/Skills-icons/Python-icon.png')}
							alt='python icon'
						/>
						Python
					</li>

					<li className='skill-list-item'>
						<img
							src={require('../../assets/Skills-icons/JS-icon.png')}
							alt=''
						/>
						JavaScript
					</li>
					<li className='skill-list-item'>
						<img
							src={require('../../assets/Skills-icons/ionic-react-icon-react-native-pngreact-logo-free-transparent-png-images-pngaaacom.png')}
							alt=''
						/>
						React
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						Java
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						HTML
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						CSS
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						Bootstrap
					</li>
				</div>
				<div className='framework-container'>
					<h2 className='skills-category-heading'>
						Frameworks and Databases and other programs
					</h2>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						Django
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						Spring Boot
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						Node Express
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						MongoDB
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						PostgreSQL
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						Matlab
					</li>
					<li className='skill-list-item'>
						<img src={require('')} alt='' />
						SolidWorks
					</li>
				</div>
			</div>
		</div>
	);
}

export default Skills;