import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Aux from './hoc/Aux/Aux.jsx';
import Layout from './hoc/Layout/Layout.jsx';
import MusicFestivalWebViewLayout from './hoc/Layout/MusicFestivalWebviewLayout.jsx';
import classes from './App.css';
import FestbotBrowserContainer from './containers/webview/FestbotBrowserContainer/FestbotBrowserContainer.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';
import { BrowserRouter } from 'react-router-dom';
import FestivalProgramContainer from './containers/webview/FestivalProgramContainer/FestivalProgramContainer.jsx';
import DiscoverContainer from './containers/webview/Discover/DiscoverContainer.jsx';
import LandingPageContainer from './containers/www/LandingPage/LandingPageContainer.jsx';
import PartnerLandingPageContainer from './containers/www/LandingPage/PartnerLandingPageContainer.jsx';

import VisibiltyControl from './hoc/VisibilityControl/VisibilityControl.jsx';

import { hot } from 'react-hot-loader';

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
						<Route path="/" exact component={LandingPageContainer} />
						<Route path="/partner" exact component={PartnerLandingPageContainer} />
					</Layout>
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
