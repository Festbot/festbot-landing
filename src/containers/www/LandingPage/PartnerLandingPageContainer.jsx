import React, { Component } from 'react';
import classes from './PartnerLandingPageContainer.css';
import Hero from '../hero/HeroContainer.jsx';
import ContentBlockContainer from '../../../hoc/ui/ContentBlockContainer.jsx';
import ContentBlockImage from '../ContentBlock/ContentBlockImage.jsx';
import ContentBlockText from '../ContentBlock/ContentBlockText.jsx';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import HighlightsBlock from '../Highlights/HighlightsBlock.jsx';
import HighlightsContainer from '../Highlights/HighlightsContainer.jsx';
import IconLabel from '../IconLabel/IconLabel.jsx';

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

import iconLocation from '../../../assets/images/icon/place.svg';

export class ParnerLandingPageContainer extends Component {
	render() {
		return (
			<div className={classes.contentContainer}>
				<VisibiltyControl effect="fade">
					<Hero
						title="Became a Festbot partner"
						subtitle="Help your visitors for the best festival experience"
						buttonText="Get Started"
						buttonColor="#9900E5"
						imgUrl="http://festbot.com/assets/image/partner_splash-min.jpg"
						height="500px"
					/>
				</VisibiltyControl>

				<VisibiltyControl effect="fade" always={true}>
					<HighlightsContainer backgroundColor="#2a2a2a">
						<VisibiltyControl effect="zoom" always={true}>
							<HighlightsBlock alignDirection="left" title="It's free" description="Upload your festival program for FREE, and start to share information about your event to your visitors" />
						</VisibiltyControl>
						<VisibiltyControl effect="zoom" always={true}>
							<HighlightsBlock alignDirection="left" title="Direct access" description="Festbot is working on the Messenger Platform as a converstaion thread. This is the most direct access to your visitors existed." />
						</VisibiltyControl>
						<VisibiltyControl effect="zoom" always={true}>
							<HighlightsBlock
								alignDirection="left"
								title="Flexible options"
								description="Manage your event locations, services, useful informations. The Festbot AI engine will learn and answer your visitors most common questions."
							/>
						</VisibiltyControl>
					</HighlightsContainer>
				</VisibiltyControl>

				<VisibiltyControl effect="fade" always={true}>
					<ContentBlockContainer backgroundColor="" imageUrl="http://festbot.com/assets/image/heart.jpg" height="500px">
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="zoom" always={true}>
								<ContentBlockImage height="500px" title="VIP festival experience for your visitors" subtitle="Share every little details of your event. " buttonText="Get Started" buttonColor="#9900E5" />
							</VisibiltyControl>
						</ContentBlockWrapper>
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="right" always={true}>
								<IconLabel
									icon="location_on"
									iconSize="60px"
									iconAlign="left"
									title="Manage your locations"
									description="Festbot will learn and help to find sports for your visitors"
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
							<VisibiltyControl effect="right" always={true}>
								<IconLabel
									icon="explore"
									iconSize="60px"
									iconAlign="left"
									title="Machine Learning"
									description="Managing locations is easy. Festbot AI engine will learn and help to find Stages, Parking, Facilties, Food... for your visitors"
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
							<VisibiltyControl effect="right" always={true}>
								<IconLabel
									icon="speaker_phone"
									iconSize="60px"
									iconAlign="left"
									title="Safety first"
									description="Emergency and evacuation notifications are never been easier before."
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
							<VisibiltyControl effect="right" always={true}>
								<IconLabel
									icon="chat"
									iconSize="60px"
									iconAlign="left"
									title="Announcements"
									description="The fastest and most direct way to spread the news. eg. Booked Artist or any other information."
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
						</ContentBlockWrapper>
					</ContentBlockContainer>
				</VisibiltyControl>

				<VisibiltyControl effect="fade" always={true}>
					<ContentBlockContainer backgroundColor="rgb(203, 217, 224)" imageUrl="http://festbot.com/assets/image/artist_background.jpg" height="600px">
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="left" always={true}>
								<IconLabel
									icon="perm_identity"
									iconSize="60px"
									iconAlign="left"
									title="Manage your own Artist profile"
									description="Engage your fans and rise your popularity, for higher trending position."
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
							<VisibiltyControl effect="left" always={true}>
								<IconLabel
									icon="chat"
									iconSize="60px"
									iconAlign="left"
									title="Get connected"
									description="Use Festbot artist chatroom to engage your fans after your performance."
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
							<VisibiltyControl effect="left" always={true}>
								<IconLabel
									icon="explore"
									iconSize="60px"
									iconAlign="left"
									title="Discover"
									description="With discover function fans could find you and save your performance date to their festival calendar."
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
							<VisibiltyControl effect="left" always={true}>
								<IconLabel
									icon="event_available"
									iconSize="60px"
									iconAlign="left"
									title="On tour"
									description="Are you on tour? Festbot will list all of your tour locations and dates."
									backgroundColor="#2a2a2a"
									textColor="#ddd"
								/>
							</VisibiltyControl>
						</ContentBlockWrapper>
						<ContentBlockWrapper maxWidth="600px">
							<VisibiltyControl effect="zoom" always={true}>
								<ContentBlockImage imageUrl="http://festbot.com/assets/image/crowd.jpg" height="600px" title="For Artists" subtitle="Let's check what Festbot can do for you." buttonText="Get Started" buttonColor="#9900E5" />
							</VisibiltyControl>
						</ContentBlockWrapper>
					</ContentBlockContainer>
				</VisibiltyControl>
			</div>
		);
	}
}

export default ParnerLandingPageContainer;
