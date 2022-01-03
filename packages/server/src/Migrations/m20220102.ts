export const m20220102 = {
	name: 'm20220102',
	action: [
		`create table "state" ("id" uuid not null, "version" int4 not null default 1, "name" text not null);`,
		`alter table "state" add constraint "state_pkey" primary key ("id");`,
		`create table "country" ("id" uuid not null, "version" int4 not null default 1, "name" text not null, "state_id" uuid not null);`,
		`alter table "country" add constraint "country_pkey" primary key ("id");`,
		`alter table "country" add constraint "country_state_id_unique" unique ("state_id");`,
		`alter table "country" add constraint "country_state_id_foreign" foreign key ("state_id") references "state" ("id") on update cascade;`,

		`alter table "historic_site" add column "country_id" uuid, add column "state_id" uuid;`,
		`alter table "historic_site" add constraint "historic_site_country_id_foreign" foreign key ("country_id") references "country" ("id") on update cascade;`,
		`alter table "historic_site" add constraint "historic_site_state_id_foreign" foreign key ("state_id") references "state" ("id") on update cascade;`,
	],
};
