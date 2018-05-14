import React from 'react'
import classes from './ContentBlockWrapper.css'

const ContentBlockWrapper = (props) => {
  return (
    <div className={classes.container} style={{color: '#444444',maxWidth:props.maxWidth}}>
      {props.children}
    </div>
  )
}

export default ContentBlockWrapper
