import React from 'react';
import classes from './PlatformDetails.css';

import * as T from '../../../helpers/i18n.js';

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';
import ContentBlockContainer from '../../../hoc/ui/ContentBlockContainer.jsx';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import ContentBlockImage from '../ContentBlock/ContentBlockImage.jsx';

var instructions = '';

const instructionsSkype = () => {
	return (instructions = (
		<div className={classes.container}>
			<h1>{T.translate("Festbot on Skype is in development")}</h1>
			<p style={{ color: 'red' }}>{T.translate("IMPORTANT NOTE: Festbot is NOT available on Skype right now, but will be available soon. If you still want to use Festbot now, please use Facebook Messenger instead. You will be notified once Festbot will be available on Skype, and all of your personal data could be easily trasfered to Skype.")}
			</p>
		</div>
	));
};

const instructionsMessenger = () => {
	return (instructions = (
		<div className={classes.container}>
			<p>{T.translate("Messenger can be used in conjunction with Facebook on your computer, at Messenger.com or accessed using the mobile Messenger app on Android and iOS devices. Because Messenger works on iPhones, it also works on the Apple Watch.")}
			</p>
			<div className={classes.flex}>
				<VisibiltyControl effect="zoom">
					{' '}
					<div className={classes.steps}>
						<h1>{T.translate("Step 2. Tap the Messenger logo to start")}</h1>
						<a href="http://m.me/1976488962678917">
							<div className={classes.logoContainer}>
								<img src="http://festbot.com/assets/image/logo/facebook-messenger-png-transparent-logo-min-min.png" />
							</div>
						</a>
					</div>
				</VisibiltyControl>

				<h1>{T.translate("OR")}</h1>
				<VisibiltyControl effect="zoom">
					{' '}
					<div className={classes.steps}>
						<h1>{T.translate("Search for Festbot at Facebook Messenger")}</h1>
						<ContentBlockImage imageUrl="http://festbot.com/assets/image/messenger_search-min.jpg" />
					</div>
				</VisibiltyControl>
			</div>
		</div>
	));
};

const instructionsKikMessenger = () => {
	return (instructions = (
		<div className={classes.container}>
			<p>
      {T.translate("Today, Kik is the best way to connect with friends, no matter where you meet them. But it’s also become so much more. As the only chat platform built especially for teens and as a clear leader in chatbots.")}
			</p>
			<div className={classes.flex}>
				<VisibiltyControl effect="zoom">
					<div className={classes.steps}>
						<h1>{T.translate("Step 2. Download Kik Messenger")}</h1>
						<a href="https://kik.co/download">
							<div className={classes.logoContainer}>
								<img src="http://festbot.com/assets/image/logo/kik-logo-min-min.png" />
							</div>
						</a>
						<p>{T.translate("You can skip this step, if you already using Kik Messenger.")}</p>
					</div>
				</VisibiltyControl>

				<VisibiltyControl effect="zoom">
					{' '}
					<div className={classes.steps}>
						<h1>{T.translate("Step 3. Search for Festbot at Kik Messenger")}</h1>
						<ContentBlockImage imageUrl="http://festbot.com/assets/image/kik_search-min.jpg" />
					</div>
				</VisibiltyControl>
			</div>
		</div>
	));
};

const instructionsViber = () => {
	return (instructions = (
		<div className={classes.container}>
			<h1>{T.translate("Festbot on Viber is in development")}</h1>
			<p style={{ color: 'red' }}>
      {T.translate("IMPORTANT NOTE: Festbot is NOT available on Viber right now, but will be available soon. If you still want to use Festbot now, please use Facebook Messenger instead. You will be notified once Festbot will be available on Viber, and all of your personal data could be easily trasfered to Viber.")}
			</p>
		</div>
	));
};

const PlatformDetails = ({ platform }) => {
	switch (platform) {
		case 'Skype': {
			instructionsSkype();
			break;
		}
		case 'Facebook Messenger': {
			instructionsMessenger();
			break;
		}
		case 'Kik Messenger': {
			instructionsKikMessenger();
			break;
		}
		case 'Viber': {
			instructionsViber();
			break;
		}
	}

	return (
		<div>
			<VisibiltyControl effect="fade" always={true}>
				<ContentBlockContainer backgroundColor="#fff" imageUrl="" height="">
					{instructions}
				</ContentBlockContainer>
			</VisibiltyControl>
		</div>
	);
};

export default PlatformDetails;
