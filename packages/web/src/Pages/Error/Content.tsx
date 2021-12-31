import React from 'react';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';

const d = debug('web.src.server');

export function Content() {
	return <ContentWrapper title="404" content={<>This page could not be found.</>} />;
}
