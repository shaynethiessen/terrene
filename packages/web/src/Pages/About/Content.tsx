import debug from 'debug';
import React from 'react';
import {ContentWrapper} from '../../Layout';

const d = debug('terrene.web.Pages.About.Content');

export function Content() {
	return <ContentWrapper title="About" content={<p>Information about our organization and our goals is coming soon.</p>} />;
}
