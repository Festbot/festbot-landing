import React from 'react';
import phoneCanvas from '../../../assets/images/phone_canvas-01.png';
import classes from './ContentBlockImage.css';

const ContentBlockImage = ({ imageUrl, videoUrl, height, title, subtitle, buttonText, buttonColor }) => {
	let videoElement = '';
	let imageElement = '';
	if (!videoUrl == '') {
		videoElement = (
			<div className={classes.container}>
				<img src={phoneCanvas} />
				<div className={classes.frame}>
					<div className={classes.video}>
						<video autoPlay loop height="416" playsInline>
							<source src={videoUrl} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		);
	}


	if (!imageUrl == '') {
		videoElement = (
			<div className={classes.container}>
				<img src={phoneCanvas} />
				<div className={classes.frame}>
					<div className={classes.image}>
						<img src={imageUrl} height="403px" width="230" />
					</div>
				</div>
			</div>
		);
	}

	
	if (!title == '') {
		imageElement = (
			<div className={classes.imageContent}>
				<div className={classes.header}>{title}</div>
				<div className={classes.title}>{subtitle}</div>
				{(buttonText)&&<div className={classes.getStarted} style={{ backgroundColor: buttonColor }}>
				{buttonText}
			</div>}
				
			</div>
		);
	}

	return (
		<div>
			{videoElement}
			{imageElement}
		</div>
	);
};

export default ContentBlockImage;
