export enum MemberRoleEnum {
	President = 'President',
	Secretary = 'Secretary',
	Member = 'Member',
}

export type MemberEntityConstructor = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: MemberRoleEnum;
};

export type MemberEntity = MemberEntityConstructor & {
	id: string;
	version: number;
};
