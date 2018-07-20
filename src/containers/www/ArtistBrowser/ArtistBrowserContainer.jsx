import React, { Component } from 'react';
import { connect } from 'react-redux';

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
import { Helmet } from 'react-helmet';

import { getArtistsByNameGenre } from './../../../helpers/artistApiHelper.js';

import { searchArtists, searchByGenre, setFilterGenre, setArtistForDetails } from '../../../store/actions/actions.js';

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

export class ArtistBrowserContainer extends Component {
	state = {
		activeDetails: '',
	};

	async componentDidMount() {
		this.props.searchArtists(undefined, 10);

		if (!this.props.match.params.artist_name == '') {
			this.artistInThePathFilter(this.props.match.params.artist_name);
		}
		this.props.searchByGenre(this.props.activeGenre);
	}

	artistInThePathFilter = async keyword => {
		let filteredResults = await getArtistsByNameGenre(keyword);
		if (filteredResults.length == 1) {
			this.props.setArtistForDetails({currentTarget:{id:filteredResults[0]}})
		}
	};

	listFilteredArtistByGenre = async e => {
		await this.props.setFilterGenre(e)
		this.props.searchByGenre(this.props.activeGenre);

	};


	render() {
		
		const featuredArtists = this.props.artistList.map((artist, index) => {
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

		const filteredGenre = this.props.filteredResult.map((artist, index) => {
			return (
				<div className={classes.genresItemContainer} key={index} id={artist.name} onClick={()=>this.artistInThePathFilter(artist.name)}>
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
				<Helmet>
					<title>{this.props.activeArtist.name}</title>
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
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							pop
						</div>
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							electronic
						</div>
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							rock
						</div>
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							alternative
						</div>
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							house
						</div>
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							minimal
						</div>
						<div onClick={this.listFilteredArtistByGenre} className={classes.highlightGenre}>
							metal
						</div>

						<div className={classes.separator} />
					</div>
					<VisibiltyControl effect="right" always={true}>
						<div className={classes.highlightSliderContainer}>{filteredGenre}</div>
					</VisibiltyControl>
					<div className={classes.highlightHeader}>
						{this.props.activeArtist.name}
						<div className={classes.separator} />
					</div>
					<ArtistDetails artist={this.props.activeArtist} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ artists }) => {
	return {
		artistList: artists.artistList,
		filteredResult: artists.filteredResult,
		activeGenre: artists.activeGenre,
		activeArtist: artists.activeArtist
	};
};

const mapDispatchToProps = dispatch => {
	return {
		searchArtists: (selector, limit) => dispatch(searchArtists(selector, limit)),
		searchByGenre: selector => dispatch(searchByGenre(selector)),
		setFilterGenre: genre => dispatch(setFilterGenre(genre)),
		setArtistForDetails: artist => dispatch(setArtistForDetails(artist))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArtistBrowserContainer);
