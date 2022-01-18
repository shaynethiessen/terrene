import type {EntityManager} from '@mikro-orm/core';
import slugify from 'slugify';
import type {HistoricSiteSubmitParams} from 'terrene-types';
import {ActionTypeEnum, MemberRoleEnum} from 'terrene-types';
import {Country} from '../../Entities/Country';
import {Designation} from '../../Entities/Designation';
import {HistoricSite} from '../../Entities/HistoricSite';
import {Member} from '../../Entities/Member';
import {State} from '../../Entities/State';
import {existsSync, mkdirSync, readdir, readdirSync} from 'fs';
import wget from 'node-wget-promise';
import {exec} from 'child_process';

export const Submit = {
	path: 'historic-site/submit',
	type: ActionTypeEnum.put,
	action: async (params: HistoricSiteSubmitParams, authorization: string, em: EntityManager): Promise<void> => {
		const member = await em.findOne(Member, {id: authorization});
		if (!member) throw new Error('bad authorization');

		const country = await em.findOne(Country, {id: params.country.id});
		if (!country) throw new Error('country not found');

		const state = await em.findOne(State, {id: params.state.id});
		if (!state) throw new Error('state not found');

		if (member.role === MemberRoleEnum.President || member.role === MemberRoleEnum.Secretary) {
			// Designations
			const designations = params.designations.map(designation => {
				const newDesignation = new Designation(designation);
				em.persist(newDesignation);

				return newDesignation;
			});

			// Slug
			const slug = slugify(params.name, {lower: true, strict: true});

			// Featured Image
			let imageCount = 0;
			const date = new Date();
			const workingDirectory = `./assets/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			const mountedDirectory = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			if (!existsSync(workingDirectory)) {
				mkdirSync(workingDirectory, {recursive: true});
				imageCount = 1;
			} else {
				const files = readdirSync(workingDirectory);
				imageCount = Math.ceil(files.length / 2 + 1);
			}

			const imagePathDB = mountedDirectory + '/' + imageCount + '.jpg';
			const imagePathThumb = workingDirectory + '/' + imageCount + '.thumb.jpg';
			const imagePathLarge = workingDirectory + '/' + imageCount + '.large.jpg';

			await wget(params.featuredImage, {output: imagePathThumb});
			await wget(params.featuredImage, {output: imagePathLarge});

			exec(`convert ${imagePathThumb} -resize 500x ${imagePathThumb}`);
			exec(`convert ${imagePathLarge} -resize 1280x ${imagePathLarge}`);

			// Historic Site Data
			const historicSite = new HistoricSite({...params, designations, slug, country, state, featuredImage: imagePathDB});

			await em.persist(historicSite);

			await em.flush();
		}
	},
};
