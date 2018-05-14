import React from 'react'

import classes from './IconLabel.css' 

import FontIcon from 'material-ui/FontIcon';




const IconLabel = ({icon,iconSize,iconAlign,title,description,backgroundColor,textColor}) => {
  
  const iconStyles = {
    padding: 10,
    fontSize: iconSize, 
    color:textColor
  };

  return (
    <div className={classes.container} style={{backgroundColor: backgroundColor}}>
      <FontIcon className="material-icons" style={iconStyles}>{icon}</FontIcon>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
    </div>
    </div>
  )
}

export default IconLabel
