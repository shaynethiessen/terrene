import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Icon, Menu} from 'semantic-ui-react';
import logo from './logo.png';
import type {Page} from '../Pages';

interface Props {
	pages: Page[];
}

export function MainMenu(props: Props) {
	const {pathname} = useLocation();

	return (
		<Menu inverted attached>
			<Menu.Item name="logo">
				<img src={logo} alt="Logo" />
			</Menu.Item>
			{props.pages.map(page => {
				if (page.mainMenu?.position === 'left')
					return (
						<Menu.Item key={page.route} name={page.name} active={pathname === page.route}>
							<Link to={page.route}>{page.mainMenu.icon ? <Icon name={page.mainMenu.icon} color="yellow" size="large" /> : page.name}</Link>
						</Menu.Item>
					);
			})}
			<Menu.Menu position="right">
				{props.pages.map(page => {
					if (page.mainMenu?.position === 'right')
						return (
							<Menu.Item key={page.route} name={page.name} active={pathname === page.route}>
								<Link to={page.route}>{page.mainMenu.icon ? <Icon name={page.mainMenu.icon} color="yellow" size="large" /> : page.name}</Link>
							</Menu.Item>
						);
				})}
			</Menu.Menu>
		</Menu>
	);
}
