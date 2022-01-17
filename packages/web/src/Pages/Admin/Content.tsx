import debug from 'debug';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';
import {RunMigrationAction} from './Components/RunMigrationAction';

const d = debug('terrene.web.Pages.Admin.Content');

export function Content() {
	const navigate = useNavigate();
	const {memberId} = useParams<{memberId: string}>();
	const [memberInfo, setMemberInfo] = useState<string>();

	useEffect(() => {
		if (!memberInfo) {
			server
				.fetch('member/authenticate', {}, memberId)
				.then(response => {
					setMemberInfo(response.data);
				})
				.catch(() => navigate('/404'));
		}
	}, [memberInfo, memberId, navigate]);

	return (
		<ContentWrapper
			title="Admin"
			content={
				<>
					<Button onClick={() => navigate(`/admin/${memberId}/submit-historic-site`)} color="green">
						Submit Historic Sites
					</Button>
					<Button onClick={() => navigate(`/admin/${memberId}/pending-historic-sites`)} color="yellow">
						View Pending Historic Sites
					</Button>
				</>
			}
			sidebar={
				<>
					<RunMigrationAction />
				</>
			}
		/>
	);
}
