import React from 'react';
import reactLogo from './images/logo192.png';

export default function Header() {
	return (
		<nav className='navbar'>
			<img src={reactLogo} alt='' className='navbar-logo' />
			<ul className='navbar-menu'>
				<li>Pricing</li>
				<li>Contact</li>
				<li>About</li>
			</ul>
		</nav>
	);
}
