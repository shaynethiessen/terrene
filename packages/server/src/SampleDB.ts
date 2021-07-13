interface HistoricSite {
	id: number;
	lat: number;
	lng: number;
	name: string;
	slug: string;
}

export const historicSites: HistoricSite[] = [
	{
		id: 1,
		lat: 46.809444,
		lng: -71.210556,
		name: 'Historic District of Old Québec',
		slug: 'historic-district-of-old-quebec',
	},
	{
		id: 2,
		lat: 44.4211,
		lng: -76.1743,
		name: 'Rideau Canal',
		slug: 'ridaeu-canal',
	},
	{
		id: 3,
		lat: 52.542,
		lng: -131.1313,
		name: 'SG̱ang Gwaay Llanagaay',
		slug: 'sgang-gwaay-llanagaay',
	},
	{
		id: 4,
		lat: 49.075,
		lng: -111.633056,
		name: "Writing-on-Stone / Áísínai'pi",
		slug: 'writing-on-stone-aisinaipi',
	},
];
