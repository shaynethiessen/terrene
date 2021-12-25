import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainMenu} from './Layout';
import {Home, HistoricSite, Error, Login} from './Pages';

function App() {
	return (
		<BrowserRouter>
			<div style={{height: 'calc(100% - 47px)'}}>
				<MainMenu />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact={false} path="/historic-site/:slug">
						<HistoricSite />
					</Route>
					<Route exact={false} path="/login/">
						<Login />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
