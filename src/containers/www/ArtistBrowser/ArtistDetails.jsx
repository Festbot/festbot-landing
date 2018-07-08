import React, { Component } from 'react';
import classes from './DiscoverContainer.css';
//import * as colors from 'material-ui/styles/colors';
import axios from 'axios';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';
import * as T from '../../../helpers/i18n.js';
// import IconHeadset from 'material-ui/svg-icons/hardware/headset';
// import IconInfo from 'material-ui/svg-icons/action/event';
// import Star from 'material-ui/svg-icons/toggle/star';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import { IconButton } from 'material-ui';

//import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import moment from 'moment';
import 'babel-polyfill';

export class ArtistDetails extends Component {
	state = {
		slideIndex: 0,
		events: [],
		artist: {
			facebook: '',
			website: '',
			spotify: '',
			genres: []
		}
	};

	componentDidMount() {
		this.updateArtistDetails();
	}

	async updateArtistDetails() {
		const { data } = await axios.post('https://api.festbot.com/artists/_find', { selector: { name: this.props.artist } });

		this.setState({ artist: data.docs[0] });

		const { data: eventData } = await axios.post('https://api.festbot.com/events/_find', { selector: { artist: this.props.artist } });

		this.setState({
			events: eventData.docs.sort((eventA, eventB) => {
				if (moment(eventA.startDate).isBefore(eventB.startDate)) return -1;
				if (moment(eventB.startDate).isBefore(eventA.startDate)) return 1;
				if (moment(eventB.startDate).isSame(eventA.startDate)) return 0;
			})
		});

		//window.scrollTo( 0, rect.top )
	}

	render() {
		if (this.state.artist.name !== this.props.artist) {
			this.updateArtistDetails();
		}

		const spotifyId = this.state.artist.spotify;

		const eventList = this.state.events.map((event, index) => {
			return (
				<li key={index}>
					<div className={classes.CalendarContainer}>
						<div className={classes.CalendarRow}>{moment(event.startDate).format('MMM')}</div>
						<div className={classes.CalendarRow}>{moment(event.startDate).format('Do')}</div>
					</div>
					<div className={classes.venueName}>{event.festival}</div>
				</li>
			);
		});

		return (
			<div>
				<div className={classes.artistDetailsContainer}>
					<div style={{ maxWidth: '800px', width: '100%' }}>
						<VisibiltyControl always={true}>
							{spotifyId ? (
								<div>
									<iframe src={'https://open.spotify.com/embed/artist/' + spotifyId} width="100%" height="420" frameBorder={'0'} seamless allowtransparency="true" />
								</div>
							) : (
								<div className={classes.centerCenter}>
									<p>{T.translate("Sorry we couldn't find the artist on Spotify")}</p>
								</div>
							)}
						</VisibiltyControl>

						<VisibiltyControl effect="zoom" always={true}>
							<div style={{ padding: '16px 0' }}>
								<div className={classes.detailsHeader}>{T.translate('On tour')} </div>
								<div className={classes.detailsContent}>{this.props.artist ? eventList : null}</div>

								<div className={classes.detailsHeader} />
								<div className={classes.detailsContent} style={{ margin: '5px' }}>
									<p />
									<p />
									{this.state.artist.facebook && `Facebook: ${this.state.artist.facebook}`}
									<p />
									{this.state.artist.website && `${T.translate('Website:')} ${this.state.artist.website}`}

									<p />
									<div className={classes.detailsContentGenre}>
										{this.state.artist.genres
											? this.state.artist.genres.map((genre, index) => {
													return (
														<div key={index} className={classes.inverse}>
															{genre}
														</div>
													);
											  })
											: null}
									</div>
								</div>
							</div>
						</VisibiltyControl>
					</div>
				</div>
			</div>
		);
	}
}

export default ArtistDetails;
