import React from 'react';
import {ToastContainer} from 'react-toastify';
import {Grid, Header, Image, Modal} from 'semantic-ui-react';
import {getImage} from '../lib/getImage';

interface Props {
	title: string;
	sidebar?: JSX.Element;
	content: JSX.Element;
	source?: string | null;
	featuredImage?: string | null;
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
							<Grid.Column>
								{props.featuredImage && (
									<Modal
										closeIcon
										trigger={<Image style={{cursor: 'pointer'}} size="large" floated="left" src={getImage(props.featuredImage).thumb} />}
									>
										<Modal.Header>{props.title}</Modal.Header>
										<Modal.Content image>
											<Image src={getImage(props.featuredImage).large} />
										</Modal.Content>
									</Modal>
								)}
								{props.content}
							</Grid.Column>
						</Grid.Row>
						{props.source && (
							<Grid.Row>
								<Grid.Column style={{fontStyle: 'italic'}}>
									This work is licensed under{' '}
									<a href={'https://creativecommons.org/licenses/by-sa/3.0/'} target="_blank" rel="noreferrer">
										Creative Commons Attribution-ShareAlike 3.0 Unported
									</a>{' '}
									license and is a derivative from{' '}
									<a href={props.source} target="_blank" rel="noreferrer">
										wikipedia.org
									</a>
									.
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
