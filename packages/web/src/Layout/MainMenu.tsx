import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

export function MainMenu() {
	return (
		<Menu inverted attached>
			<Link to="/">
				<Menu.Item name="Terrene" />
			</Link>
			<Link to="/">
				<Menu.Item name="Discover World History" />
			</Link>
		</Menu>
	);
}
