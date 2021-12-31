export const m20211231 = {
	name: 'm20211231',
	action: [`alter table "member" add column "role" text check ("role" in ('President', 'Secretary', 'Member'));`],
};
