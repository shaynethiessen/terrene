import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Icon, Menu} from 'semantic-ui-react';
import logo from './logo.png';

export function MainMenu() {
	const {pathname} = useLocation();

	return (
		<Menu inverted attached>
			<Menu.Item name="logo">
				<img src={logo} alt="Logo" />
			</Menu.Item>
			<Menu.Item name="home" active={pathname === '/'}>
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item name="country" active={pathname === '/country'}>
				<Link to="/country">Country</Link>
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item name="login" active={pathname === '/login'}>
					<Link to="/login">
						<Icon name="user circle" color="yellow" size="large" />
					</Link>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
}
