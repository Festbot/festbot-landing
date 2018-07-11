import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import * as T from './helpers/i18n.js';

import Aux from './hoc/Aux/Aux.jsx';
import Layout from './hoc/Layout/Layout.jsx';

import classes from './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';
import { BrowserRouter } from 'react-router-dom';

import LandingPageContainer from './containers/www/LandingPage/LandingPageContainer.jsx';
import PartnerLandingPageContainer from './containers/www/LandingPage/PartnerLandingPageContainer.jsx';
import ArtistBrowserContainer from './containers/www/ArtistBrowser/ArtistBrowserContainer.jsx';
import PrivacyPolicyContainer from './containers/www/PrivacyPolicy/PrivacyPolicyContainer.jsx';
import GetStarted from './containers/www/Features/GetStarted.jsx';
import VisibiltyControl from './hoc/VisibilityControl/VisibilityControl.jsx';

import PageInitTop from './components/www/PageInitTop.js';

import { hot } from 'react-hot-loader';

T.setLanguage();

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: colors.orange700,
		primary2Color: colors.orange900,
		primary3Color: colors.grey400
	},
	appBar: {
		height: 50
	}
});

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MuiThemeProvider muiTheme={muiTheme}>
					<Layout>
						<PageInitTop>
							<Route path="/" exact component={LandingPageContainer} />
							<Route path="/partner" exact component={PartnerLandingPageContainer} />
							<Route path="/artist" exact component={ArtistBrowserContainer} />
							<Route path="/privacy" exact component={PrivacyPolicyContainer} />
							<Route path="/get_started" exact component={GetStarted} />
						</PageInitTop>
					</Layout>
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
