import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Menu} from 'semantic-ui-react';
import logo from './logo.png';

export function MainMenu() {
	return (
		<Menu inverted attached stackable style={{align: 'center'}}>
			<Menu.Item name="logo">
				<img src={logo} alt="Logo" style={{paddingRight: '0.6em'}} />
			</Menu.Item>
			<Menu.Item name="home">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item name="login" position="right">
				<Link to="/login">
					<Icon name="user circle" color="yellow" size="large" />
				</Link>
			</Menu.Item>
		</Menu>
	);
}
