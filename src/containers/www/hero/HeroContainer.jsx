import React from 'react';
import classes from './HeroContainer.css';
import { Link } from 'react-router-dom';
import * as T from '../../../helpers/i18n.js';


const Hero = ({ title, subtitle, buttonText, buttonColor, imgUrl, height,actionUrl,innerLink }) => {
	return (
		<div>
			<div className={classes.container} style={{ backgroundImage: "url('" + imgUrl + "')", height: height }}>
				<div className={classes.content}>
					<div className={classes.header}>{title}</div>
					<div className={classes.title}>{subtitle}</div>
					
					{actionUrl&&<div className={classes.getStarted} style={{ backgroundColor: buttonColor }}><a href={actionUrl} target="_blank">{buttonText}</a></div>}
					{innerLink&&<div className={classes.getStarted} style={{ backgroundColor: buttonColor }}><Link to='/get_started'>{T.translate("Get Started")}</Link></div>}
					

				</div>
			</div>
		</div>
	);
};

export default Hero;
