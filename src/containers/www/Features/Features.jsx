import React, { Component } from 'react';
import classes from './Features.css';
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

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

import iconLocation from '../../../assets/images/icon/place.svg';

export class Features extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Get Started</title>
				</Helmet>

				<VisibiltyControl effect="fade" always={true}>
					<ContentBlockContainer backgroundColor="" imageUrl="http://festbot.com/assets/image/heart.jpg" height="500px">
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="zoom" always={true}>
								<ContentBlockImage height="500px" title="Get started in 3 easy steps" subtitle="Festbot is a multiplatform festival chatbot and event calendar" buttonText="Get Started" buttonColor="#9900E5" />
							</VisibiltyControl>
						</ContentBlockWrapper>
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="14 " description="Festival" backgroundColor="rgba(255, 230, 200, 0.9)" textColor="#ddd" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="1 475 " description="Program" backgroundColor="rgba(255, 230, 200, 0.9)" textColor="#ddd" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="245 " description="POI" backgroundColor="rgba(255, 230, 200, 0.9)" textColor="#ddd" />
							</VisibiltyControl>
							<VisibiltyControl effect="zoom" always={true}>
								<CounterBlock title="1232 " description="Artist" backgroundColor="rgba(255, 230, 200, 0.9)" textColor="#ddd" />
							</VisibiltyControl>
						</ContentBlockWrapper>

            <div className={classes.logoContainer}>

            <VisibiltyControl effect="zoom" always={true}>
            <img src="http://festbot.com/assets/image/logo/facebook-messenger-png-transparent-logo-min.png" />
          </VisibiltyControl>
          <VisibiltyControl effect="zoom" always={true}>
            <img src="http://festbot.com/assets/image/logo/kik-logo-min.png" />
          </VisibiltyControl>
          <VisibiltyControl effect="zoom" always={true}>
            <img src="http://festbot.com/assets/image/logo/skype_logo-min.png" />
          </VisibiltyControl>
          <VisibiltyControl effect="zoom" always={true}>
            <img src="http://festbot.com/assets/image/logo/Viber_logo.svg-min.png" />
          </VisibiltyControl>
            </div>
						
					</ContentBlockContainer>
				</VisibiltyControl>

				<VisibiltyControl effect="fade" always={true}>
          <ContentBlockContainer backgroundColor="#ddd" imageUrl="" height="" padding={"30px"}>
						<div className={classes.stepContainer}>
							<div className={classes.stepHeader}>
								<div className={classes.stepCounter}>Step 1:</div>
								<div className={classes.stepTitle}>Select your platform</div>
							</div>
              <div className={classes.stepContent} />
              
        
						</div>
					</ContentBlockContainer>
				</VisibiltyControl>
			</div>
		);
	}
}

export default Features;
