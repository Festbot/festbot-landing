import React, { Component } from 'react'
import classes from './FooterContainer.css'
import logoSmall from '../../../assets/images/festbot-logo-big-grey-01.png';
import facebookLogo from '../../../assets/images/facebook.svg'
import instagramLogo from '../../../assets/images/instagram.svg'
import messengerLogo from '../../../assets/images/messenger.svg'

export class FooterContainer extends Component {
  state={
    watchDivHeight:0,
    opacity:0,
    shiftY:0
  }

  componentDidMount =()=> {
    window.addEventListener("scroll", this.footerControl);

    // this.setState((prevState) => ({
    //   width:this.div.getBoundingClientRect().width
    // }));

    this.setState((prevState) => ({
      watchDivHeight:this.footerDiv.getBoundingClientRect().height
    }));

    this.footerControl()
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.footerControl);
  };

  footerControl=()=>{
    this.setState((prevState) => ({
      watchDivHeight:this.footerDiv.getBoundingClientRect().height
    }));

    const offsetY = window.scrollY+window.innerHeight
    const contentEnd = document.body.clientHeight-this.state.watchDivHeight
    const visibleFooter = offsetY-contentEnd
    
    if(offsetY>contentEnd) {
      this.setState((prevState) => ({
        opacity: visibleFooter / this.state.watchDivHeight,
        shiftY: (this.state.watchDivHeight-visibleFooter)/2
      }));
    } else {
      this.setState((prevState) => ({
        opacity: 0.001,
      }));
    }
  }

  render() {



    return (
      <div>
        <div className={classes.watchContainer} style={{opacity: 1-this.state.opacity,height: this.state.watchDivHeight}}></div>
        <div ref={el => (this.footerDiv = el)} style={{opacity: this.state.opacity, transform: "translateY("+ this.state.shiftY +"px)"}} className={classes.footerContainer}>
          
          <img className={classes.footerLogo} src={logoSmall}/>
          <div className={classes.titleText}>a personal assistant for the festival season</div>
          <div className={classes.footerLinkBar}>
            <div className={classes.socialLinks}><img  style={{width:"50px",color:"#444444"}} src={facebookLogo}/><img style={{width:"50px",color:"#444444"}} src={instagramLogo}/><img style={{width:"50px",color:"#444444"}} src={messengerLogo}/></div>
            <div className={classes.footerLinkGroup}>
              <div className={classes.footerLink}>Contact</div>
              <div className={classes.footerLink}>Partner</div>
              <div className={classes.footerLink}>Terms</div>
              <div className={classes.footerLink}>Press</div>
            </div>
            <div className={classes.copyright}>2018 &copy; Festbot</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterContainer
