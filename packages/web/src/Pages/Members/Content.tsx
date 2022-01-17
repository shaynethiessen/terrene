import debug from 'debug';
import React from 'react';
import {ContentWrapper} from '../../Layout';

const d = debug('terrene.web.Pages.Members.Content');

export function Content() {
	return <ContentWrapper title="Members" content={<p>Information about our most active members is coming soon.</p>} />;
}
