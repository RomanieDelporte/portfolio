/** @format */

import "./App.scss";

import { BaseLayout } from "./layouts";
import { RouteWithLayout } from "./utilities";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as Routes from "./routes";
import { AboutPage, ContactPage, HomePage, PortfolioPage } from "./pages";

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<RouteWithLayout
						exact
						path={Routes.LANDING}
						layout={BaseLayout}
						component={HomePage}
					/>
					<RouteWithLayout
						exact
						path={Routes.ABOUT}
						layout={BaseLayout}
						component={AboutPage}
					/>
					<RouteWithLayout
						exact
						path={Routes.PORTFOLIO}
						layout={BaseLayout}
						component={PortfolioPage}
					/>
					<RouteWithLayout
						exact
						path={Routes.CONTACT}
						layout={BaseLayout}
						component={ContactPage}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
