import React, { Component,Fragment } from 'react';
import classes from './FooterContainer.css';
import { Link } from 'react-router-dom';
import * as T from '../../../helpers/i18n.js';

import logoSmall from '../../../assets/images/festbot01.png';
//import logoSmall from '../../../assets/images/festbot-logo-big-grey-01.png';
import facebookLogo from '../../../assets/images/facebook.svg';
import instagramLogo from '../../../assets/images/instagram.svg';
import messengerLogo from '../../../assets/images/messenger.svg';

export class FooterContainer extends Component {
	state = {
		watchDivHeight: 0,
		opacity: 0,
		shiftY: 0
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.footerControl);

		// this.setState((prevState) => ({
		//   width:this.div.getBoundingClientRect().width
		// }));

		this.setState(prevState => ({
			watchDivHeight: this.footerDiv.getBoundingClientRect().height
		}));

		this.footerControl();
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.footerControl);
	};

	footerControl = () => {
		this.setState(prevState => ({
			watchDivHeight: this.footerDiv.getBoundingClientRect().height
		}));

		const offsetY = window.scrollY + window.innerHeight;
		const contentEnd = document.body.clientHeight - this.state.watchDivHeight;
		const visibleFooter = offsetY - contentEnd;

		if (offsetY > contentEnd) {
			this.setState(prevState => ({
				opacity: visibleFooter / this.state.watchDivHeight,
				shiftY: (this.state.watchDivHeight - visibleFooter) / 2
			}));
		} else {
			this.setState(prevState => ({
				opacity: 0.001
			}));
		}
	};

	render() {
		return (
			<Fragment>
				<div className={classes.watchContainer} style={{ opacity: 1 - this.state.opacity, height: this.state.watchDivHeight }} />
				<div ref={el => (this.footerDiv = el)} style={{ opacity: this.state.opacity, transform: 'translateY(' + this.state.shiftY + 'px)' }} className={classes.footerContainer}>
					<img className={classes.footerLogo} src={logoSmall} width="300px"/>
					<div className={classes.titleText}>{T.translate('a personal assistant for the festival season')}</div>
					<div className={classes.footerLinkBar}>
						<div className={classes.socialLinks}>
							<a href="https://www.facebook.com/Festbot-1976488962678917/" target="_blank"><img style={{ width: '22px', color: '#232323' }} src={facebookLogo} /></a>
							<a href="https://www.instagram.com/festbot/" target="_blank"><img style={{ width: '22px', color: '#232323' }} src={instagramLogo} /></a>
							<a href="https://www.facebook.com/Festbot-1976488962678917/" target="_blank"><img style={{ width: '22px', color: '#232323' }} src={messengerLogo} /></a>
						</div>
						<div className={classes.footerLinkGroup}>
							<div className={classes.footerLink}>{T.translate('Contact')} </div>
							<Link to="/partner" className={classes.footerLink}>
								{T.translate('Partner')}
							</Link>
							<Link to="/privacy" className={classes.footerLink}>
								{T.translate('Privacy')}
							</Link>
							<div className={classes.footerLink}>{T.translate('Press')}</div>
						</div>
						<div className={classes.copyright}>2018 &copy; Festbot</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FooterContainer;
