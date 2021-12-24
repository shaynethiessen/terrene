import {Collection, Entity, ManyToMany, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import {LocalDate} from 'js-joda';
import {Designation} from './Designation';

@Entity()
export class HistoricSite {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Property({type: 'number'})
	latitude: number;

	@Property({type: 'number'})
	longitude: number;

	@Property({type: 'text'})
	name: string;

	@Property({type: 'text'})
	slug: string;

	@Property({type: 'text'})
	content: string;

	@Property({type: 'text'})
	attribution: string;

	@Property({type: 'number'})
	activePeriodStart: LocalDate;

	@Property({type: 'number', nullable: true})
	activePeriodEnd?: LocalDate | null;

	@ManyToMany(() => Designation)
	designations? = new Collection<Designation>(this);

	constructor(
		latitude: number,
		longitude: number,
		name: string,
		slug: string,
		content: string,
		attribution: string,
		activePeriodStart: LocalDate,
		activePeriodEnd: LocalDate | null,
		designations: Collection<Designation>,
	) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
		this.slug = slug;
		this.content = content;
		this.attribution = attribution;
		this.activePeriodStart = activePeriodStart;
		this.activePeriodEnd = activePeriodEnd;
		this.designations = designations;
	}
}
