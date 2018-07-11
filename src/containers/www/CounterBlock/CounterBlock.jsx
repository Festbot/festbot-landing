import React from 'react';

import classes from './CounterBlock.css';

import FontIcon from 'material-ui/FontIcon';

const CounterBlock = ({ icon, iconSize, iconAlign, title, description, backgroundColor, textColor }) => {

	return (
		<div className={classes.container} >

			<div className={classes.content} style={{ backgroundColor: backgroundColor, color:textColor }}>
				<div className={classes.title}>{title}</div>
				<div className={classes.description}>{description}</div>
			</div>
		</div>
	);
};

export default CounterBlock;
