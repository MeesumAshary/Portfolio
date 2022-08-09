import React from 'react';
import './Skills.css';

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
		<div className='skills-page-container'>
			<div className='skills-header'>
				<h1>My Skills</h1>
			</div>
			<div className='skill-list-container'>
				<h2 className='skills-category-heading'>Porgramming Languages</h2>
				<div className='lang-container'>
					<div className='skill-list-item python'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/Python-icon.png')}
							alt='python icon'
						/>
						Python
					</div>

					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/JS-icon.png')}
							alt=''
						/>
						JavaScript
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/ionic-react-icon-react-native-pngreact-logo-free-transparent-png-images-pngaaacom.png')}
							alt=''
						/>
						React
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/Java-icon.png')}
							alt=''
						/>
						Java
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/HTML-icon.png')}
							alt=''
						/>
						HTML
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/CSS-icon.png')}
							alt=''
						/>
						CSS
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/bootstrap-lcon.png')}
							alt=''
						/>
						Bootstrap
					</div>
				</div>
				<h2 className='skills-category-heading'>
					Frameworks and Databases and other programs
				</h2>
				<div className='framework-container'>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/Django-icon.jpeg')}
							alt=''
						/>
						Django
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/Spring-icon.png')}
							alt=''
						/>
						Spring Boot
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/node-js-javascript-npm-express-js-sharp.png')}
							alt=''
						/>
						Node Express
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/MongoDB-icon.webp')}
							alt=''
						/>
						MongoDB
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.webp')}
							alt=''
						/>
						PostgreSQL
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/Matlab-lcon.png')}
							alt=''
						/>
						Matlab
					</div>
					<div className='skill-list-item'>
						<img
							className='skill-icon-img'
							src={require('../../assets/Skills-icons/solidworks-icon.png')}
							alt=''
						/>
						SolidWorks
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
