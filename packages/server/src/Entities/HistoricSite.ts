import {Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import {v4} from 'uuid';
import type {HistoricSiteEntityConstructor} from 'terrene-types';
import {Designation} from './Designation';
import {Country} from './Country';
import {State} from './State';

@Entity()
export class HistoricSite {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({columnType: 'decimal(10,6)'})
	latitude: number;

	@Property({columnType: 'decimal(10,6)'})
	longitude: number;

	@Property({type: 'text'})
	name: string;

	@Property({type: 'text', unique: true})
	@Unique()
	slug: string;

	@Property({type: 'text'})
	content: string;

	@Property({type: 'text'})
	source: string;

	@Property({type: 'text', nullable: true})
	featuredImage?: string | null;

	@Property({type: 'number'})
	activePeriodStart: number;

	@Property({type: 'number', nullable: true})
	activePeriodEnd?: number | null;

	@ManyToMany(() => Designation)
	designations = new Collection<Designation>(this);

	@ManyToOne('Country', {eager: true})
	country: Country;

	@ManyToOne('State', {eager: true})
	state: State;

	constructor({
		latitude,
		longitude,
		name,
		slug,
		content,
		source,
		featuredImage,
		activePeriodStart,
		activePeriodEnd,
		designations,
		country,
		state,
	}: HistoricSiteEntityConstructor & {country: Country; state: State}) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.slug = slug;
		this.content = content;
		this.source = source;
		this.featuredImage = featuredImage;
		this.activePeriodStart = activePeriodStart;
		this.activePeriodEnd = activePeriodEnd;
		if (designations) this.designations?.set(designations);
		this.country = country;
		this.state = state;
	}
}
