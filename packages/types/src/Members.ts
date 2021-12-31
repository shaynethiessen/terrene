export enum RolesEnum {
	President = 'President',
	Secretary = 'Secretary',
	Member = 'Member',
}

export type MemberType = {
	id: number;
	name: string;
	firstName: string;
	lastName: string;
	email: string;
	joined: Date;
	role: RolesEnum;
};
