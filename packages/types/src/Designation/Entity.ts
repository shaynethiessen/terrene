export enum DesignationTypeEnum {
	UnescoWorldHeritageSite = 'UNESCO World Heritage Site',
	NationalHistoricSiteOfCanada = 'National Historic Site of Canada',
	ProvincialHistoricSiteOfAlberta = 'Provincial Historic Site of Alberta',
	ProvincialHistoricSiteOfBritishColumbia = 'Provincial Historic Site of British Columbia',
	ProvincialHistoricSiteOfManitoba = 'Provincial Historic Site of Manitoba',
	ProvincialHistoricSiteOfNewBrunswick = 'Provincial Historic Site of New Brunswick',
	ProvincialHistoricSiteOfNewfoundlandandLabrador = 'Provincial Historic Site of Newfoundland and Labrador',
	ProvincialHistoricSiteOfNorthwestTerritories = 'Provincial Historic Site of Northwest Territories',
	ProvincialHistoricSiteOfNovaScotia = 'Provincial Historic Site of Nova Scotia',
	ProvincialHistoricSiteOfNunavut = 'Provincial Historic Site of Nunavut',
	ProvincialHistoricSiteOfOntario = 'Provincial Historic Site of Ontario',
	ProvincialHistoricSiteOfPrinceEdwardIsland = 'Provincial Historic Site of Prince Edward Island',
	ProvincialHistoricSiteOfQuebec = 'Provincial Historic Site of Quebec',
	ProvincialHistoricSiteOfSaskatchewan = 'Provincial Historic Site of Saskatchewan',
	ProvincialHistoricSiteOfYukon = 'Provincial Historic Site of Yukon',
}

export type DesignationEntityConstructor = {
	type: DesignationTypeEnum;
	year: number;
	officialName: string;
};

export type DesignationEntity = DesignationEntityConstructor & {
	id: string;
	version: number;
};
