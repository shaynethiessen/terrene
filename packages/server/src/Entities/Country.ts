import {Collection, Entity, OneToMany, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import type {CountryEntityConstructor} from 'terrene-types';
import {v4} from 'uuid';
import type {HistoricSite} from './HistoricSite';

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

	@OneToMany('HistoricSite', 'country', {nullable: true, orphanRemoval: true})
	historicSites = new Collection<HistoricSite>(this);

	constructor({name, slug, code, description}: CountryEntityConstructor) {
		this.name = name;
		this.slug = slug;
		this.code = code;
		this.description = description;
	}

	addHistoricSite(historicSite: HistoricSite) {
		this.historicSites.add(historicSite);
	}

	removeHistoricSite(historicSite: HistoricSite) {
		this.historicSites.remove(historicSite);
	}
}
