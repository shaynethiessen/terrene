import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import debug from 'debug';
import {Footer, MainMenu} from './Layout';
import {Pages} from './Pages';

const d = debug('web.src.app.historicSite');
function App() {
	return (
		<BrowserRouter>
			<div style={{height: 'calc(100% - 47px)'}}>
				<MainMenu />
				<Switch>
					{Pages.map(page => {
						const {exact, route, name, Content} = page;
						return (
							<Route exact={exact} path={`/${route}`} key={name}>
								<Content />
							</Route>
						);
					})}
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
