import debug from 'debug';
import React from 'react';
import {ContentWrapper} from '../../Layout';

const d = debug('terrene.web.Pages.Error.Content');

export function Content() {
	return <ContentWrapper title="404" content={<>This page could not be found.</>} />;
}
