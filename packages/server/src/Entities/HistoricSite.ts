import {Collection, Entity, ManyToMany, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import {v4} from 'uuid';
import {Designation} from './Designation';

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
	attribution: string;

	@Property({type: 'number'})
	activePeriodStart: number;

	@Property({type: 'number', nullable: true})
	activePeriodEnd?: number | null;

	@ManyToMany(() => Designation)
	designations = new Collection<Designation>(this);

	constructor({
		latitude,
		longitude,
		name,
		slug,
		content,
		attribution,
		activePeriodStart,
		activePeriodEnd,
		designations,
	}: {
		latitude: number;
		longitude: number;
		name: string;
		slug: string;
		content: string;
		attribution: string;
		activePeriodStart: number;
		activePeriodEnd?: number | null;
		designations: Designation[];
	}) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.slug = slug;
		this.content = content;
		this.attribution = attribution;
		this.activePeriodStart = activePeriodStart;
		this.activePeriodEnd = activePeriodEnd;
		if (designations) this.designations?.set(designations);
	}
}
