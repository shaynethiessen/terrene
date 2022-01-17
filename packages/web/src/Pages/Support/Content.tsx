import debug from 'debug';
import React from 'react';
import {ContentWrapper} from '../../Layout';

const d = debug('terrene.web.Pages.Support.Content');

export function Content() {
	return <ContentWrapper title="Support" content={<p>Support is coming soon.</p>} />;
}
