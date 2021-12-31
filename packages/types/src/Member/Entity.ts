export enum MemberRoleEnum {
	President = 'President',
	Secretary = 'Secretary',
	Member = 'Member',
}

export type MemberEntity = {
	id: string;
	version: number;
	firstName: string;
	lastName: string;
	role: MemberRoleEnum;
	joined: Date;
};
