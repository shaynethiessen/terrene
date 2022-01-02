import {Entity, OneToOne, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import type {CountryEntityConstructor} from 'terrene-types';
import type {State} from './State';

@Entity()
export class Country {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	@OneToOne({type: 'State', inversedBy: 'country'})
	state: State;

	constructor({name, state}: CountryEntityConstructor) {
		this.name = name;
		this.state = state;
	}
}
