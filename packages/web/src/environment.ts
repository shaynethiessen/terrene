const {hostname} = window.location;

export const environment = {
	serverURL: hostname === 'localhost' ? 'http://localhost:3001' : 'https://terrene-server.herokuapp.com',
};
