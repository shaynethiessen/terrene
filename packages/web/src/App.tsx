import debug from 'debug';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Footer, MainMenu, ScrollToTop} from './Layout';
import {Pages} from './Pages';

const d = debug('terrene.web.App');
function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div style={{height: 'calc(100% - 40px)'}}>
				<MainMenu />
				<Routes>
					{Pages.map(page => {
						const {route, name, Content} = page;
						return <Route path={`/${route}`} key={name} element={<Content />} />;
					})}
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
