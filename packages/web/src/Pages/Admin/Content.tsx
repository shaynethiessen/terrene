import React, {useEffect, useState} from 'react';
import {Button} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';

export function Content() {
	const [runMigration, setRunMigration] = useState(false);
	useEffect(() => {
		if (runMigration) {
			server.fetch('migrations/run').then(() => {
				setRunMigration(false);
				toast.success('Migration started!');
			});
		}
	}, [runMigration]);

	return <ContentWrapper title="Admin" content={<Button onClick={() => setRunMigration(true)}>Run Migration</Button>} />;
}
