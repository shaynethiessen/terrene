export enum DesignationTypeEnum {
	NationalHistoricSiteOfCanada = 'National Historic Site of Canada',
	ProvincialHistoricSiteOfAlberta = 'Provincial Historic Site of Alberta',
	UnescoWorldHeritageSite = 'UNESCO World Heritage Site',
}

export type DesignationType = {
	id: string;
	version: number;
	officialName: string;
	year: number;
	type: DesignationTypeEnum;
};

export type HistoricSiteType = {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
	slug: string;
	content: string;
	source: string;
	featuredImage?: string | null;
	activePeriodStart: number;
	activePeriodEnd?: number | null;
	designations: DesignationType[];
};

export type HistoricSiteTypeAdd = {
	latitude: number;
	longitude: number;
	name: string;
	slug: string;
	content: string;
	source: string;
	featuredImage?: string | null;
	activePeriodStart: number;
	activePeriodEnd?: number | null;
	designations: DesignationType[];
	memberId: string;
};

export type DesignationTypeForm = {
	key: number;
	officialName?: string;
	year?: number;
	type?: DesignationTypeEnum;
};

export type HistoricSiteTypeForm = {
	latitude?: number;
	longitude?: number;
	name?: string;
	slug?: string;
	content?: string;
	source?: string;
	activePeriodStart?: number;
	activePeriodEnd?: number | null;
	designations?: DesignationTypeForm[];
};
