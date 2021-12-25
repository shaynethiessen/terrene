import {Entity, Enum, PrimaryKey, Property} from '@mikro-orm/core';
import {v4} from 'uuid';
import {DesignationTypeEnum} from 'terrene-types';

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

	constructor({type, year, officialName}: {type: DesignationTypeEnum; year: number; officialName: string}) {
		this.type = type;
		this.year = year;
		this.officialName = officialName;
	}
}
