import {Entity, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import type {CountryEntityConstructor} from 'terrene-types';

@Entity()
export class Country {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	constructor({name}: CountryEntityConstructor) {
		this.name = name;
	}
}
