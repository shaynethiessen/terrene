import {Entity, OneToOne, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import {Country} from './Country';
import type {StateEntityConstructor} from 'terrene-types';

@Entity()
export class State {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	@OneToOne({type: 'Country', mappedBy: 'state'})
	country: Country;

	constructor({name, country}: StateEntityConstructor) {
		this.name = name;
		this.country = country;
	}
}
