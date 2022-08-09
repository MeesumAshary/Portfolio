import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
	return (
		<div>
			<nav>
				<Link className='nav-link' to='/'>
					<div className='nav-list'>Meesum Ashary</div>
				</Link>
				<Link className='nav-link' to='/about'>
					<li className='nav-list'>About</li>
				</Link>
				<Link className='nav-link' to='/skills'>
					<li className='nav-list'>Skills</li>
				</Link>
				<Link className='nav-link' to='/work'>
					<li className='nav-list'> Project/Works</li>
				</Link>
				<Link className='nav-link' to='/contact'>
					<li className='nav-list'> Contact </li>
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
