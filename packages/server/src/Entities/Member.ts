import {Entity, Enum, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {RolesEnum} from 'terrene-types';

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

	@Enum({items: () => RolesEnum, type: 'text'})
	role: RolesEnum;

	@Property({type: 'date'})
	joined = new Date();

	constructor({firstName, lastName, email, role}: {firstName: string; lastName: string; email: string; role: RolesEnum}) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.role = role;
	}
}
