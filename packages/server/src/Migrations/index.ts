import {m20211226} from './m20211226';
import {m20211228} from './m20211228';
import {m20211229} from './m20211229';
import {m20211229b} from './m20211229b';

interface Migration {
	name: string;
	action: string[];
}

export const Migrations: Migration[] = [m20211226, m20211228, m20211229, m20211229b];
