import React, { Component } from 'react'
import { connect } from 'react-redux';
import classes from './DiscoverContainer.css';
import * as colors from 'material-ui/styles/colors';
import axios from 'axios';

import {saveFavouriteEvent,removeFavouriteEvent} from '../../../components/apiHelper.js'

import IconHeadset from 'material-ui/svg-icons/hardware/headset';
import IconInfo from 'material-ui/svg-icons/action/event';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { IconButton } from 'material-ui';

import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import moment from 'moment';


export class Details extends Component {
  state={
		slideIndex: 0,
		events:[],
		artist:{
			facebook:'',
			website:'',
			spotify:'',
			genres:[],

		}
  }

  async componentDidMount()  {
		let ref = this.activeDetailsDiv;

  const {data} = await axios.post("https://api.festbot.com/artists/_find",{selector:{slug: this.props.artist}})
	console.log('artist details ',data)
	this.setState({artist: data.docs[0]})
	

		const {data:eventData} = await axios.post("https://api.festbot.com/shows/_find",{selector:{'artist_slug': this.props.artist}})
		console.log('program details ',eventData)

		this.setState({events: eventData.docs.sort((eventA,eventB)=> {
		 if (moment(eventA.startDate).isBefore(eventB.startDate)) return -1
		 if (moment(eventB.startDate).isBefore(eventA.startDate)) return 1
		 if (moment(eventB.startDate).isSame(eventA.startDate)) return 0
		})})
		
		console.log('program details ',this.state.events)

		
	
		
		//window.scrollTo( 0, rect.top )
}



handleChange = value => {
  this.setState({
    slideIndex: value
  });
};



addToFavourite = e => {
	this.setState({
		activeEvent: e.currentTarget.name
	});
};

isActiveFavouriteItem = item =>{
	
	const filteredResults = this.props.savedShows
		.filter(artist => {
			return (
				(artist.toLowerCase().indexOf(item.toLowerCase()) > -1 )
			) 
		})
	return filteredResults.length >0

}



favouriteItemToggle=(item)=>{
	console.log(item.currentTarget.name)
	if (this.isActiveFavouriteItem(item.currentTarget.name)) {
		this.props.removeFromFavourites(item.currentTarget.name)
		console.log('torles')
		const userId=this.props.userId
		removeFavouriteEvent(userId,item.currentTarget.name)
	} else {
		this.props.addToFavourites(item.currentTarget.name)
		console.log('hozza adas')
		const userId=this.props.userId
		saveFavouriteEvent(userId,item.currentTarget.name)
	}
	
	console.log(this.props.savedShows)

}



  render() {
		
		const spotifyId = this.state.artist.spotify;
		
		const eventList = this.state.events.map((event,index)=>{
			return (
				<li>
					<div className={classes.CalendarContainer}>
						<div className={classes.CalendarRow}>{moment(event.startDate).format('MMM')}</div>
						<div className={classes.CalendarRow}>{moment(event.startDate).format('Do')}</div>
					</div>
					<div className={classes.venueName}>{event.festival}</div>
					
					<div className={classes.saveIcon}>
        		<IconButton iconStyle={{width:'30',height: '30'}} style={{width:'35',height:'35'}} name={event._id}  onClick={this.favouriteItemToggle} > {this.isActiveFavouriteItem(event._id) ? (<Star color={colors.orange900} />) : (<StarBorder color={colors.blueGrey300} />)}</IconButton>
      		</div>
				

				</li>
			)
		})

    return (
      <div onClick={(e)=>{e.stopPropagation()}} ref={element => (this.activeDetailsDiv = element)}>
						<Tabs
							onChange={this.handleChange}
							value={this.state.slideIndex}
							tabItemContainerStyle={{
								backgroundColor: ' rgba(0,0,0,0.4)',
								height: '45px'
							}}
							inkBarStyle={{ backgroundColor: 'white' }}
						>
							<Tab icon={<IconInfo />} label="" value={0} />
							<Tab icon={<IconHeadset />} label="" value={1} />
							<Tab label="Map" value={2} />
						</Tabs>
						<SwipeableViews
							index={this.state.slideIndex}
							onChangeIndex={this.handleChange}
						>
							<div style={{padding: '16px 0'}}>
								<div className={classes.detailsHeader}>
									On tour
								</div>
								<div className={classes.detailsContent}>
									{eventList}
								</div>

								<div className={classes.detailsHeader}>
									
								</div>
								<div className={classes.detailsContent} style={{margin: '5px'}}>
									<p />
									<p />
									Facebook: {this.state.artist.facebook}
									<p />
									Website: {this.state.artist.website}
									<p />
									<div className={classes.detailsContentGenre}>
										{this.state.artist.genres.map((genre,index) =>{
											return <div id={index} className={classes.inverse}>{genre}</div>
										})}
									</div>
								</div>
							</div>

							<div>
								<iframe
									src={
										'https://open.spotify.com/embed/artist/' +
										spotifyId
									}
									width="100%"
									height="400"
									frameBorder={'0'}
									seamless
									allowtransparency="true"
								/>
							</div>

							<div className={classes.centerCenter}>
							<p>Map and Navigation will be available once the Location of the event has been confirmed by the organizer.</p>
							</div>
						</SwipeableViews>
					</div>
    )
  }
}

const mapStateToProps = state => {
	return {
		userId: state.userId,
    savedShows: state.savedShows,
	
	};
};

const mapDispatchToProps = dispatch => {
	return {

    addToFavourites:(event) => dispatch({type: 'ADD_FAVOURITE', value: event}),
    removeFromFavourites:(event) => dispatch({type: 'REMOVE_FAVOURITE', value: event}),
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Details);


