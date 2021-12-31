import React from 'react';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';

const d = debug('web.src.server');

export function Content() {
	return <ContentWrapper title="Members" content={<p>Information about our most active members is coming soon.</p>} />;
}
