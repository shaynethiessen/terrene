import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import logo from './logo.png';

export function MainMenu() {
	return (
		<Menu inverted attached stackable style={{align: 'center'}}>
			<Link to="/">
				<Menu.Item name="tittle">
					<img src={logo} alt="Logo" style={{paddingRight: '0.6em'}} />
					Terrene
				</Menu.Item>
			</Link>
			<Link to="/">
				<Menu.Item name="slogan" style={{top: '0.1em'}}>
					Discover World History
				</Menu.Item>
			</Link>
		</Menu>
	);
}
