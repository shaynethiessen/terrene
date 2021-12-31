import React from 'react';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';

const d = debug('web.src.server');

export function Content() {
	return <ContentWrapper title="About" content={<p>Information about our organization and our goals is coming soon.</p>} />;
}
