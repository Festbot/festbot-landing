import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu.jsx'
import * as T from '../../helpers/i18n.js';

import classes from './MenuBar.css';

export class MenuBar extends Component {
	render() {
		return (
			<div className={classes.menuContainer}>
				
					<Link to='/' className={classes.menuItem}>{T.translate("Home")}</Link>
					<Link to='/get_started' className={classes.menuItem}>{T.translate("Get Started")}</Link>
					<Link to='/artist' className={classes.menuItem}>{T.translate("Artist Browser")}</Link>
					<Link to='/festival_catalog' className={classes.menuItem}>{T.translate("Festival Catalog")}</Link>
					<Link to='/partner' className={classes.partner}>{T.translate("Partner")}</Link>
				<MobileMenu/>
			</div>
		);
	}
}

export default MenuBar;
