import {Entity, PrimaryKey, Property, Unique} from '@mikro-orm/core';
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

	@Property({type: 'text', unique: true})
	@Unique()
	slug: string;

	@Property({type: 'text'})
	code: string;

	@Property({type: 'text'})
	description: string;

	constructor({name, slug, code, description}: CountryEntityConstructor) {
		this.name = name;
		this.slug = slug;
		this.code = code;
		this.description = description;
	}
}
