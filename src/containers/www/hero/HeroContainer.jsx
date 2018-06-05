import React from 'react';
import classes from './HeroContainer.css';

const Hero = ({ title, subtitle, buttonText, buttonColor, imgUrl, height }) => {
	return (
		<div>
			<div className={classes.container} style={{ backgroundImage: "url('" + imgUrl + "')", height: height }}>
				<div className={classes.content}>
					<div className={classes.header}>{title}</div>
					<div className={classes.title}>{subtitle}</div>
					<div className={classes.getStarted} style={{ backgroundColor: buttonColor }}>
						{buttonText}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
