import {historicSites} from '../SampleDB';

export const HistoricSite = {
	path: 'historic-site',
	action: ({slug}: {slug: string}) => historicSites.find(historicSite => historicSite.slug === slug),
};
