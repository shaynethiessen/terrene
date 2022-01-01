export enum DesignationTypeEnum {
	NationalHistoricSiteOfCanada = 'National Historic Site of Canada',
	ProvincialHistoricSiteOfAlberta = 'Provincial Historic Site of Alberta',
	UnescoWorldHeritageSite = 'UNESCO World Heritage Site',
}

export type DesignationEntityConstructor = {
	type: DesignationTypeEnum;
	year: number;
	officialName: string;
};

export type DesignationEntity = DesignationEntityConstructor &{
	id: string;
	version: number;
};
