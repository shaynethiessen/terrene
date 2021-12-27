import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import {ToastContainer} from 'react-toastify';

interface Props {
	title: string;
	sidebar?: JSX.Element;
	content: JSX.Element;
	attribution?: string;
}

export function ContentWrapper(props: Props) {
	return (
		<Grid padded stackable>
			<ToastContainer pauseOnFocusLoss={false} />
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
