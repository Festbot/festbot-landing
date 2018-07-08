import React, { Component } from 'react';
import classes from './ArtistBrowserContainer.css';
import Hero from '../hero/HeroContainer.jsx';
import ContentBlockContainer from '../../../hoc/ui/ContentBlockContainer.jsx';
import ContentBlockImage from '../ContentBlock/ContentBlockImage.jsx';
import ContentBlockText from '../ContentBlock/ContentBlockText.jsx';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import HighlightsBlock from '../Highlights/HighlightsBlock.jsx';
import HighlightsContainer from '../Highlights/HighlightsContainer.jsx';
import ArtistDetails from './ArtistDetails.jsx';
import * as T from '../../../helpers/i18n.js';
import axios from 'axios';
import 'babel-polyfill';
import { Helmet } from 'react-helmet';

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

export class ArtistBrowserContainer extends Component {
	state = {
		searchResults: [],
		data: [],
		activeDetails: '',
		activeGenre: 'pop',
		activeArtist: 'Dubrelation feat Theo'
	};

	async componentDidMount() {
		let {
			data: { docs: data }
		} = await axios.post('https://api.festbot.com/artists/_find', { selector: { name: { $regex: '(?i)' } }, limit: 10, sort: [{ featured: 'desc' }, { popularity: 'desc' }] });

		this.setState({ searchResults: data, data: data });

		if (!this.props.match.params.artist_name == '') {
			this.artistKeywordFilter(this.props.match.params.artist_name);
		}

		this.filterToGenre("pop")
	}

	artistKeywordFilter = async keyword => {
		let {
			data: { docs: filteredResults }
		} = await axios.post('https://api.festbot.com/artists/_find', {
			selector: { $or: [{ name: { $regex: '(?i)' + keyword } }, { genres: { $elemMatch: { $regex: '(?i)' + keyword } } }] },
			limit: 100,
			sort: [{ featured: 'desc' }, { popularity: 'desc' }]
		});


		if (filteredResults.length == 0) return;
		this.setState({
			activeDetails: '',
			isOpenDetails: false,
			searchResults: filteredResults
		});
		if (filteredResults.length == 1) {
			this.setState({
				activeDetails: filteredResults[0].value.name,
				isOpenDetails: true,
				searchResults: filteredResults
			});
		}
	};

	filterToGenre = async keyword => {

		const {
			data: { docs: filteredResults }
		} = await axios.post('https://api.festbot.com/artists/_find', {
			selector: {  genres: { $elemMatch: { $regex: '(?i)' + keyword }  }},
			limit: 50,
			sort: [{ featured: 'desc' }, { popularity: 'desc' }]
		});
		
		this.setState({ artistListFilteredByGenre: filteredResults });
	};

	setFilterGenre = e => {
		if (this.state.activeGenre !== e.currentTarget.textContent) {
			this.setState({ activeGenre: e.currentTarget.textContent });

			this.filterToGenre(e.currentTarget.textContent)
		}
	};
	setArtistDetails = e => {
		if (this.state.activeGenre !== e.currentTarget.id) {
			this.setState({ activeArtist: e.currentTarget.id });

		}
	};

	render() {
		const sliceOfArtist = this.state.searchResults.slice(0, 10);

		const featuredArtists = sliceOfArtist.map((artist, index) => {
			return (
				<div
					className={classes.highlightSliderItem}
					key={index}
					style={{
						backgroundImage: artist.artistPhoto ? 'url(https://ucarecdn.com/' + artist.artistPhoto + '/)' : 'none'
					}}
				>
					<div className={classes.highlightSliderItemTitle}>{artist.name}</div>
				</div>
			);
		});

		let filteredGenre =''
		if (this.state.artistListFilteredByGenre){
			filteredGenre = this.state.artistListFilteredByGenre.map((artist, index) => {
				return (
					<div className={classes.genresItemContainer} key={index} id={artist.name} onClick={this.setArtistDetails}>
						<div
							className={classes.genresItem}
							style={{
								backgroundImage: artist.artistPhoto ? 'url(https://ucarecdn.com/' + artist.artistPhoto + '/)' : 'none',
								height: '200px',
								width: '200px',
								boxShadow: 'none'
							}}
						/>
						<div className={classes.title}>{artist.name}</div>
					</div>
				);
			});
	
		}
		
		return (
			<div className={classes.contentContainer}>
			<Helmet>
				<title>{this.state.activeArtist}</title>
			</Helmet>
				<div className={classes.highlightContainer}>
					<div className={classes.highlightHeader}>
						{T.translate('Featured Artists')}
						<div className={classes.separator} />
					</div>
					<VisibiltyControl always={true}>
						<div className={classes.highlightSliderContainer}>{featuredArtists}</div>
					</VisibiltyControl>
					<div className={classes.highlightHeader}>
						<div className={classes.highlightTitle}>{T.translate('Genres')} </div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							pop
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							electronic
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							rock
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							alternative
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							house
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							minimal
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							metal
						</div>

						<div className={classes.separator} />
					</div>
					<VisibiltyControl effect="right" always={true}>
						<div className={classes.highlightSliderContainer}>{filteredGenre}</div>
					</VisibiltyControl>
					<div className={classes.highlightHeader}>
						{this.state.activeArtist}
						<div className={classes.separator} />
					</div>
					<ArtistDetails artist={this.state.activeArtist} />
				</div>
			</div>
		);
	}
}

export default ArtistBrowserContainer;
