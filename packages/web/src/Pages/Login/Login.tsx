import React from 'react';
import {Button, Grid, Icon, Input} from 'semantic-ui-react';
import {ContentWrapper} from '../../Layout';

export function Login() {
	return (
		<ContentWrapper
			title="Login"
			content={
				<Grid>
					<Grid.Row>
						<Grid.Column>
							<Input iconPosition="left" placeholder="Email" label="Email">
								<Icon name="mail" />
								<input />
							</Input>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Input iconPosition="left" placeholder="Password" label="Password">
								<Icon name="eye" />
								<input />
							</Input>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Button>Login</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			}
		/>
	);
}
