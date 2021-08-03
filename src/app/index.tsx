import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {ROUTES} from "./routes";
import {NotFoundPage} from "./pages/NotFoundPage";
import {GlobalStyle} from "../styles/global-styles";
import {Header} from "./components/Header";

export function App() {
	return (
		<>
			<Header/>
			<BrowserRouter>
				<Switch>
					{ROUTES.map((route, idx) => {
						const {path, ...props} = route;

						return <Route key={idx}
						              {...{
							              ...props,
							              path: process.env.PUBLIC_URL + path,
						              }}
						/>;
					})}

					{/* 404 fallback */}
					<Route component={NotFoundPage}/>
				</Switch>
				<GlobalStyle/>
			</BrowserRouter>
		</>
	);
}
