import React from 'react'
//import LogoImage from '../../assets/images/www-festbot-logo.png'
import LogoImage from '../../assets/images/festbot01.png'
import classes from './FestbotLogo.css'

const FestbotLogo = () => {
  return (
    <div className={classes.container} >
      <img className={classes.logoImg} src={LogoImage}/>
    </div>
  )
}

export default FestbotLogo
