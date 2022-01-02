import {Entity, OneToOne, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import type {DesignationEntityConstructor} from 'terrene-types';
import {Country} from './Country';

@Entity()
export class State {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'text'})
	name: string;

	@OneToOne({type: 'Contract', mappedBy: 'fee'})
	country: Country;

	constructor({name, country}: DesignationEntityConstructor) {
		this.name = name;
		this.country = country;
	}
}
