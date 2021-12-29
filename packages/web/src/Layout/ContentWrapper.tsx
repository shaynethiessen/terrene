import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import {ToastContainer} from 'react-toastify';
import {Link} from 'react-router-dom';

interface Props {
	title: string;
	sidebar?: JSX.Element;
	content: JSX.Element;
	source?: string;
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
						{props.source && (
							<Grid.Row>
								<Grid.Column>
									This work is licensed under{' '}
									<Link to={{pathname: 'https://creativecommons.org/licenses/by-sa/3.0/'}} target="_blank">
										Creative Commons Attribution-ShareAlike 3.0
									</Link>{' '}
									and is a derivative from{' '}
									<Link to={{pathname: props.source}} target="_blank">
										wikipedia.org
									</Link>
								</Grid.Column>
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
