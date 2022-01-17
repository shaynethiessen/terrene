import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Button} from 'semantic-ui-react';
import {server} from '../../../core/server';

export function RunMigrationAction() {
	const {memberId} = useParams<{memberId: string}>();
	const [runMigration, setRunMigration] = useState(false);

	useEffect(() => {
		if (runMigration) {
			server
				.fetch('migrations/run', {}, memberId, 'PUT')
				.then(() => {
					toast.success('Migration started!');
				})
				.finally(() => setRunMigration(false));
		}
	}, [runMigration, memberId]);

	return (
		<Button color="yellow" fluid onClick={() => setRunMigration(true)}>
			Run Migration
		</Button>
	);
}
