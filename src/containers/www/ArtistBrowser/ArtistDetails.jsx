import React, { Component } from 'react';
import classes from './DiscoverContainer.css';
//import * as colors from 'material-ui/styles/colors';
import axios from 'axios';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';
import * as T from '../../../helpers/i18n.js';

import moment from 'moment';
import 'babel-polyfill';

import { getEventsByArtist } from './../../../helpers/eventApiHelper.js';


export class ArtistDetails extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeArtist:this.props.artist.name,
			events:[],
			artist: {
				facebook: '',
				website: '',
				spotify: '',
				genres: []
			}
	}}

	async updateArtistDetails() {
		if ((this.state.activeArtist==this.props.artist.name)) return
		const eventData = await getEventsByArtist(this.props.artist.name)
		
		this.setState({
			activeArtist:this.props.artist.name,
			events: eventData.sort((eventA, eventB) => {
				if (moment(eventA.startDate).isBefore(eventB.startDate)) return -1;
				if (moment(eventB.startDate).isBefore(eventA.startDate)) return 1;
				if (moment(eventB.startDate).isSame(eventA.startDate)) return 0;
			})
		});

		//window.scrollTo( 0, rect.top )
	}

	render() {

		this.updateArtistDetails()

		const spotifyId = this.props.artist.spotify;

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
								<div className={classes.detailsContent}>{this.props.artist.name ? eventList : null}</div>

								<div className={classes.detailsHeader} />
								<div className={classes.detailsContent} style={{ margin: '5px' }}>
									<p />
									<p />
									{this.state.artist.facebook && `Facebook: ${this.props.artist.facebook}`}
									<p />
									{this.state.artist.website && `${T.translate('Website:')} ${this.props.artist.website}`}

									<p />
									<div className={classes.detailsContentGenre}>
										{this.props.artist.genres
											? this.props.artist.genres.map((genre, index) => {
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
