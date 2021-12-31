import React, {useEffect, useState} from 'react';
import {Card, Image} from 'semantic-ui-react';
import type {MemberType} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';
import placeHolderImageMale from './placeHolderImageMale.png';
import placeHolderImageFemale from './placeHolderImageFemale.png';

const d = debug('web.src.server');

export function Content() {
	const [memberInfo, setMemberInfo] = useState<MemberType[]>();

	useEffect(() => {
		if (!memberInfo) {
			server.fetch('member/get-team').then(response => {
				setMemberInfo(response.data);
			});
		}
	}, [memberInfo]);

	return (
		<ContentWrapper
			title="Team"
			content={
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
			}
		/>
	);
}
