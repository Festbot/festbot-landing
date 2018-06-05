import React, { Component } from 'react';
import classes from './ArtistBrowserContainer.css';
import Hero from '../hero/HeroContainer.jsx';
import ContentBlockContainer from '../../../hoc/ui/ContentBlockContainer.jsx';
import ContentBlockImage from '../ContentBlock/ContentBlockImage.jsx';
import ContentBlockText from '../ContentBlock/ContentBlockText.jsx';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import HighlightsBlock from '../Highlights/HighlightsBlock.jsx';
import HighlightsContainer from '../Highlights/HighlightsContainer.jsx';

import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

export class ArtistBrowserContainer extends Component {
	render() {
		return (
			<div className={classes.contentContainer}>
				<div className={classes.highlightCarousel}>sdfghjklkjhgfdsdfghjk</div>
				Browser Searchbar Highlight Carousel Artist list
			</div>
		);
	}
}

export default ArtistBrowserContainer;
