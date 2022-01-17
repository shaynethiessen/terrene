import {Entity, Enum, PrimaryKey, Property} from '@mikro-orm/core';
import {DesignationTypeEnum} from 'terrene-types';
import type {DesignationEntityConstructor} from 'terrene-types';
import {v4} from 'uuid';

@Entity()
export class Designation {
	@PrimaryKey({type: 'uuid'})
	id = v4();

	@Property({type: 'number', version: true})
	version = 1;

	@Enum({items: () => DesignationTypeEnum, type: 'text'})
	type: DesignationTypeEnum;

	@Property({type: 'number'})
	year: number;

	@Property({type: 'text'})
	officialName: string;

	constructor({type, year, officialName}: DesignationEntityConstructor) {
		this.type = type;
		this.year = year;
		this.officialName = officialName;
	}
}
