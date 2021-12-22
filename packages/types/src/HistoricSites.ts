export enum DesignationTypeEnum {
	NationalHistoricSiteOfCanada = 'National Historic Site of Canada',
	ProvincialHistoricSiteOfAlberta = 'Provincial Historic Site of Alberta',
	UnescoWorldHeritageSite = 'UNESCO World Heritage Site',
}

export type Designation = {
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
	attribution: string;
	activePeriodStart: number;
	activePeriodEnd: number | null;
	designations: Designation[];
};
