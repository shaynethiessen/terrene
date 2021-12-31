import React from 'react';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';

const d = debug('web.src.server');

export function Content() {
	return <ContentWrapper title="Support" content={<p>Support is coming soon.</p>} />;
}
