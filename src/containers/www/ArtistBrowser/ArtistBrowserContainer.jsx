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

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

export class ArtistBrowserContainer extends Component {
	state = {
		searchResults: [],
		data: [],
		activeDetails: '',
		activeGenre: 'Pop',
		activeArtist: 'Kygo'
	};

	async componentDidMount() {
		let { data } = await axios.get('https://api.festbot.com/artists/_design/webview/_view/order-by-featured?descending=true');

		this.setState({ searchResults: data.rows, data: data.rows });

		if (!this.props.match.params.artist_name == '') {
			this.artistKeywordFilter(this.props.match.params.artist_name);
		}
	}

	artistKeywordFilter = keyword => {
		const filteredResults = this.state.data.filter(({ value: artist }) => {
			return (
				artist.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
				artist.genres.filter(genres => {
					return genres.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
				}).length > 0
			);
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

	filterToGenre = keyword => {
		const filteredResults = this.state.data.filter(({ value: artist }) => {
			return (
				artist.genres.filter(genres => {
					return genres.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
				}).length > 0
			);
		});

		return filteredResults;
	};

	setFilterGenre = e => {
		if (this.state.activeGenre !== e.currentTarget.textContent) {
			this.setState({ activeGenre: e.currentTarget.textContent });
			console.log(e.currentTarget.textContent);
		}
	};
	setArtistDetails = e => {
		if (this.state.activeGenre !== e.currentTarget.id) {
			this.setState({ activeArtist: e.currentTarget.id });
			console.log(e.currentTarget.id);
		}
	};

	render() {
		const sliceOfArtist = this.state.searchResults.slice(0, 10);

		const featuredArtists = sliceOfArtist.map(({ value: artist }, index) => {
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

		const sliceOfGenre = this.filterToGenre(this.state.activeGenre).slice(0, 50);
		const filteredGenre = sliceOfGenre.map(({ value: artist }, index) => {
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

		return (
			<div className={classes.contentContainer}>
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
							Pop
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							Electronic
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							Rock
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							Alternative
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							House
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							Minimal
						</div>
						<div onClick={this.setFilterGenre} className={classes.highlightGenre}>
							Metal
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
