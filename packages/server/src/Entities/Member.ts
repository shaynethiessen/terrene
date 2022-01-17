import {Entity, Enum, PrimaryKey, Property} from '@mikro-orm/core';
import debug from 'debug';
import {MemberEntityConstructor, MemberRoleEnum} from 'terrene-types';
import {v4} from 'uuid';

const d = debug('terrene.server.Entities.Member');

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

	@Property({type: 'text'})
	password: string;

	@Enum({items: () => MemberRoleEnum, type: 'text'})
	role: MemberRoleEnum;

	@Property({type: 'date'})
	joined = new Date();

	constructor({firstName, lastName, email, password, role}: MemberEntityConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
	}
}
