import {Entity, PrimaryKey, Property, Unique} from '@mikro-orm/core';
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

	@Property({type: 'text', unique: true})
	@Unique()
	slug: string;

	constructor({name, slug}: StateEntityConstructor) {
		this.name = name;
		this.slug = slug;
	}
}
