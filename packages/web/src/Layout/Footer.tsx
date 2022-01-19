import React from 'react';
import {Link} from 'react-router-dom';
import {Divider, Grid, Header} from 'semantic-ui-react';
import logo from './logo.png';
import type {Page} from '../Pages';

interface Props {
	pages: Page[];
}

export function Footer(props: Props) {
	return (
		<Grid padded columns={3}>
			<Grid.Row>
				<Grid.Column>
					<Header as="h3">
						<Link to="/" style={{color: 'black'}}>
							<img src={logo} alt="Logo" />
							<Header.Content>
								Terrene
								<Header.Subheader>Discover World History</Header.Subheader>
							</Header.Content>
						</Link>
					</Header>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<Header as="h3">Company</Header>
					{props.pages.map(page => {
						if (page.footerMenu?.position === 'company')
							return (
								<>
									<Link to={page.route}>
										<Header as="h4" color="grey">
											{page.name}
										</Header>
									</Link>
									<br />
								</>
							);
					})}
				</Grid.Column>
				<Grid.Column>
					<Header as="h3">Community</Header>
					{props.pages.map(page => {
						if (page.footerMenu?.position === 'community')
							return (
								<>
									<Link to={page.route}>
										<Header as="h4" color="grey">
											{page.name}
										</Header>
									</Link>
									<br />
								</>
							);
					})}
				</Grid.Column>
			</Grid.Row>
			<Divider />
			<Grid.Row>
				<Grid.Column>
					<Header as="h5" color="grey">
						© {new Date().getFullYear()} Terrene - All Rights Reserved
					</Header>
				</Grid.Column>
				{props.pages.map(page => {
					if (page.footerMenu?.position === 'bottom')
						return (
							<Grid.Column>
								<Link to={page.route}>
									<Header as="h5" color="grey">
										{page.name}
									</Header>
								</Link>
							</Grid.Column>
						);
				})}
			</Grid.Row>
		</Grid>
	);
}
