import {environment} from '../core/environment';

export function getImage(path: string) {
	const extension = path.split('.').pop() || '';
	const pathWithoutExtension = path.substring(0, path.length - extension.length);

	return {
		large: `${environment.serverURL}/${pathWithoutExtension}large.${extension}`,
		thumb: `${environment.serverURL}/${pathWithoutExtension}thumb.${extension}`,
	};
}
