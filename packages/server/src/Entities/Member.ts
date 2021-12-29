import {Entity, PrimaryKey, Property} from '@mikro-orm/core';
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
	firstName: string;

	@Property({type: 'text'})
	lastName: string;

	@Property({type: 'text', unique: true})
	email: string;

	constructor({firstName, lastName, email}: {firstName: string; lastName: string, email: string}) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
}
