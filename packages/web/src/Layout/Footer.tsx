import React from 'react';
import {Link} from 'react-router-dom';
import {Divider, Grid, Header} from 'semantic-ui-react';
import logo from './logo.png';

export function Footer() {
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
					<Link to="/company/about">
						<Header as="h4" color="grey">
							About
						</Header>
					</Link>
					<br />
					<Link to="/company/donate">
						<Header as="h4" color="grey">
							Donate
						</Header>
					</Link>
					<br />
					<Link to="/company/team">
						<Header as="h4" color="grey">
							Team
						</Header>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Header as="h3">Community</Header>
					<Link to="/community/members">
						<Header as="h4" color="grey">
							Members
						</Header>
					</Link>
					<br />
					<Link to="/community/support">
						<Header as="h4" color="grey">
							Support
						</Header>
					</Link>
				</Grid.Column>
			</Grid.Row>
			<Divider />
			<Grid.Row>
				<Grid.Column>
					<Header as="h5" color="grey">
						© {new Date().getFullYear()} Terrene - All Rights Reserved
					</Header>
				</Grid.Column>
				<Grid.Column>
					<Link to="/terms-and-conditions">
						<Header as="h5" color="grey">
							Terms and Conditions
						</Header>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to="/privacy-policy">
						<Header as="h5" color="grey">
							Privacy Policy
						</Header>
					</Link>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
