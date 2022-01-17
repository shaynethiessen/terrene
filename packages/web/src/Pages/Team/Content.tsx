import debug from 'debug';
import React, {useEffect, useState} from 'react';
import {Card, Header, Image} from 'semantic-ui-react';
import type {MemberGetTeamReturn} from 'terrene-types';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';
import placeHolderImageFemale from './placeHolderImageFemale.png';
import placeHolderImageMale from './placeHolderImageMale.png';

const d = debug('terrene.web.Pages.Team.Content');

type CodeContributors = {
	id: number;
	avatar_url: string;
	html_url: string;
	login: string;
	contributions: number;
};

export function Content() {
	const [memberInfo, setMemberInfo] = useState<MemberGetTeamReturn>();
	const [codeContributors, setCodeContributors] = useState<CodeContributors[]>();

	useEffect(() => {
		if (!memberInfo) {
			server.fetch('member/get-team').then(response => {
				setMemberInfo(response.data);
			});
		}
	}, [memberInfo]);

	useEffect(() => {
		if (!codeContributors) {
			fetch('https://api.github.com/repos/shaynethiessen/terrene/contributors?q=contributions&order=desc', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			}).then(response =>
				response.json().then(data => {
					setCodeContributors(data);
				}),
			);
		}
	}, [codeContributors]);

	return (
		<ContentWrapper
			title="Team"
			content={
				<>
					<Header as="h2">Administration</Header>
					<Card.Group>
						{memberInfo?.map(member => {
							return (
								<Card key={member.id}>
									<Image src={member.role === 'President' ? placeHolderImageMale : placeHolderImageFemale} wrapped ui={false} />
									<Card.Content>
										<Card.Header>{`${member.firstName} ${member.lastName}`}</Card.Header>
									</Card.Content>
									<Card.Content extra>{member.role}</Card.Content>
								</Card>
							);
						})}
					</Card.Group>
					<Header as="h2">Volunteers</Header>
					<Header as="h3">Code Contributors</Header>
					<Card.Group>
						{codeContributors?.map(coder => {
							return (
								<Card key={coder.id} link href={coder.html_url}>
									<Image src={coder.avatar_url} wrapped ui={false} />
									<Card.Content>
										<Card.Header>{coder.login}</Card.Header>
									</Card.Content>
									<Card.Content extra>{coder.contributions}</Card.Content>
								</Card>
							);
						})}
					</Card.Group>
				</>
			}
		/>
	);
}
