import {m20211226} from './m20211226';

interface Migration {
	name: string;
	action: string[];
}

export const Migrations: Migration[] = [m20211226];
