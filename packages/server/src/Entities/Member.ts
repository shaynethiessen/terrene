import {Entity, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';

const d = debug('terrene.server.users.entities.User');

@Entity()
export class Member {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	@Property({type: 'text'})
	@Unique()
	email: string;

	constructor({name, email}: {name: string; email: string}) {
		this.name = name;
		this.email = email;
	}
}
