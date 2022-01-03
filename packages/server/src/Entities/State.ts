import {Entity, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import type {StateEntityConstructor} from 'terrene-types';

@Entity()
export class State {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	constructor({name}: StateEntityConstructor) {
		this.name = name;
	}
}
