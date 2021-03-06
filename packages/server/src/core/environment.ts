import {config} from 'dotenv';

config();

export const environment = {
	serverPort: process.env.SERVER_PORT,
	dbUsername: process.env.DB_USERNAME,
	dbPassword: process.env.DB_PASSWORD,
	dbDomain: process.env.DB_DOMAIN,
	dbServer: process.env.DB_SERVER,
	dbPort: process.env.DB_PORT,
};
