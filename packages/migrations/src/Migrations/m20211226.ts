export const m20211226 = {
	name: 'm20211226',
	action: [
		`create table "migration" ("id" uuid not null, "name" varchar(255) not null, "index" int4 not null, "date" timestamptz(0) not null, "success" bool not null);`,
		`alter table "migration" add constraint "migration_pkey" primary key ("id");`,

		`alter table "migration" add constraint "migration_index_unique" unique ("index");`,
	],
};
