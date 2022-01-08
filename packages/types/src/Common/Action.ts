import type {EntityManager} from '@mikro-orm/core';

export enum ActionTypeEnum {
	get = 'GET',
	post = 'POST',
	put = 'PUT',
}

export type ActionCall = (params: any, authorization: any, em: EntityManager) => Promise<unknown>;

export type Action = {
	path: string;
	type: ActionTypeEnum;
	action: ActionCall;
};
