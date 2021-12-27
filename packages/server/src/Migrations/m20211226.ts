export const m20211226 = {
	name: 'm20211226',
	action: [
		`create table "member" ("id" uuid not null, "version" int4 not null default 1, "name" text not null, "email" text not null, "phone" text null, "service_id" uuid null);`,
		`alter table "member" add constraint "member_pkey" primary key ("id");`,
		`alter table "member" add constraint "member_email_unique" unique ("email");`,
		`alter table "member" add constraint "member_service_id_unique" unique ("service_id");`,
		`alter table "member" add constraint "member_service_id_foreign" foreign key ("service_id") references "service" ("id") on update cascade on delete set null;`,
	],
};
