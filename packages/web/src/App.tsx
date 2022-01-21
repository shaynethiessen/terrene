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
				<MainMenu
					pages={Pages.filter(page => page.mainMenu).sort((pageOne, PageTwo) => (pageOne.mainMenu?.order || 0) - (PageTwo.mainMenu?.order || 0))}
				/>
				<Routes>
					{Pages.map(page => {
						const {route, name, Content} = page;
						return <Route path={`/${route}`} key={name} element={<Content />} />;
					})}
				</Routes>
				<Footer pages={Pages.filter(page => page.footerMenu)} />
			</div>
		</BrowserRouter>
	);
}

export default App;
