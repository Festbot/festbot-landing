import React, { Component } from 'react';

import { connect } from 'react-redux';
import { platformChange } from '../../../store//actions/actions.js';

import classes from './GetStarted.css';
import * as T from '../../../helpers/i18n.js';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import 'babel-polyfill';
import ContentBlockContainer from '../../../hoc/ui/ContentBlockContainer.jsx';
import ContentBlockImage from '../ContentBlock/ContentBlockImage.jsx';
import ContentBlockText from '../ContentBlock/ContentBlockText.jsx';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import HighlightsBlock from '../Highlights/HighlightsBlock.jsx';
import HighlightsContainer from '../Highlights/HighlightsContainer.jsx';
import CounterBlock from '../CounterBlock/CounterBlock.jsx';

import PlatformMenu from './PlatformMenu.jsx';
import PlatformDetails from './PlatformDetails.jsx'

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

import { bindActionCreators } from 'redux';

export class GetStarted extends Component {
	render() {
		return (
			<div className={classes.contentContainer}>
				<Helmet>
					<title>Get Started</title>
				</Helmet>

				<VisibiltyControl effect="fade" always={true}>
					<ContentBlockContainer backgroundColor="" imageUrl="http://festbot.com/assets/image/zamardi_eye-min.jpg" height="500px">
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="zoom" always={true}>
								<ContentBlockImage height="500px" title={T.translate("Get started in 3 easy steps")}  subtitle={T.translate("Festbot is a multiplatform festival chatbot and event calendar")}  />
							</VisibiltyControl>
						</ContentBlockWrapper>
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="14 " description="Festival" backgroundColor="rgba(0, 0, 0, 0.7)" textColor="white" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="1 982 " description="Program" backgroundColor="rgba(0, 0, 0, 0.7)" textColor="white" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="326 " description="POI" backgroundColor="rgba(0, 0, 0, 0.7)" textColor="white" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="1362 " description="Artist" backgroundColor="rgba(0, 0, 0, 0.7)" textColor="white" />
							</VisibiltyControl>
						</ContentBlockWrapper>

						<div className={classes.logoContainer}>
							<VisibiltyControl effect="zoom" always={true}>
								<img src="http://festbot.com/assets/image/logo/facebook-messenger-png-transparent-logo-min-min.png" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<img src="http://festbot.com/assets/image/logo/kik-logo-min-min.png" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<img src="http://festbot.com/assets/image/logo/skype_logo-min-min.png" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<img src="http://festbot.com/assets/image/logo/viber-min.png" />
							</VisibiltyControl>
						</div>
					</ContentBlockContainer>
				</VisibiltyControl>

			
					<ContentBlockContainer backgroundColor="#ddd" imageUrl="" height="" padding={'30px'}>
					
						<div className={classes.stepContainer}>
						<VisibiltyControl effect="fade" always={true}>
							<div className={classes.stepHeader}>
								<div className={classes.stepCounter}>{T.translate("Step 1. Select your Messenger platform")}</div>
							</div>
							<div className={classes.stepContent} />
							<PlatformMenu selectedPlatform={this.props.selectedPlatform} onChange={this.props.platformChange} />
              
						
						</VisibiltyControl></div>
					</ContentBlockContainer>
        
        {(this.props.selectedPlatform!==T.translate('Available platforms'))&&<PlatformDetails platform={this.props.selectedPlatform} />}
			</div>
		);
	}
}

const mapStateToProps = ({menu}) => {
	return {
		selectedPlatform: menu.selectedPlatform,
	};
};



export default connect(
	mapStateToProps,
	{platformChange}
)(GetStarted);
