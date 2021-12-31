export enum DesignationTypeEnum {
	NationalHistoricSiteOfCanada = 'National Historic Site of Canada',
	ProvincialHistoricSiteOfAlberta = 'Provincial Historic Site of Alberta',
	UnescoWorldHeritageSite = 'UNESCO World Heritage Site',
}

export type DesignationEntity = {
	id: string;
	version: number;
	officialName: string;
	year: number;
	type: DesignationTypeEnum;
};
