import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

interface Props {
	title: string;
	sidebar?: JSX.Element;
	content: string;
	attribution?: string;
}

export function ContentWrapper(props: Props) {
	return (
		<Grid padded stackable>
			<Grid.Row>
				<Grid.Column width={props.sidebar ? 13 : 16}>
					<Grid padded>
						<Grid.Row>
							<Grid.Column>
								<Header>{props.title}</Header>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>{props.content}</Grid.Column>
						</Grid.Row>
						{props.attribution && (
							<Grid.Row>
								<Grid.Column>{props.attribution}</Grid.Column>
							</Grid.Row>
						)}
					</Grid>
				</Grid.Column>
				{props.sidebar && (
					<Grid.Column width={3}>
						<Grid padded>
							<Grid.Row>
								<Grid.Column>{props.sidebar}</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
				)}
			</Grid.Row>
		</Grid>
	);
}
