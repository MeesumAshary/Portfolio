import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<div>
			<nav>
				<Link to='/'>
					<div className='nav-list'>Meesum Ashary</div>
				</Link>
				<Link to='/about'>
					<li className='nav-list'>About</li>
				</Link>
				<Link to='/skills'>
					<li className='nav-list'>Skills</li>
				</Link>
				<Link to='/work'>
					<li className='nav-list'> Project/Works</li>
				</Link>
				<Link to='/contact'>
					<li className='nav-list'> Contact </li>
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
