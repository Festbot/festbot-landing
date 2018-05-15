import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton.jsx'
import classes from './MobileMenu.css';
import VisibiltyControl from '../../hoc/VisibilityControl/VisibilityControl.jsx'

export class MobileMenu extends Component {
  state= {
    active:false,
    opacity:1,
    rotation:null
  }

  menuToggleHandler = () => {
    this.setState({active: !this.state.active,opacity: this.state.active? 0:1, rotation: this.state.active? null:0 })
    
  }

  menuCloseHandler = () => {
    
    setTimeout(this.menuToggleHandler,500)
    this.setState({opacity: 0, rotation: null})
    
  }

  render() {
    let mobileMenuElement=''

    if (this.state.active) {
      mobileMenuElement = (
        <VisibiltyControl>
        <div style={{opacity: this.state.opacity,transform: "rotateY("+ this.state.rotation+"deg)"}} className={classes.menuContainerMobile}>
        
        <Link to='/' onClick={this.menuCloseHandler} className={classes.menuItemMobile}><VisibiltyControl effect='zoom'>Home</VisibiltyControl></Link>
        <Link to='#features' onClick={this.menuCloseHandler} className={classes.menuItemMobile}><VisibiltyControl effect='zoom'>Features</VisibiltyControl></Link>
        <Link to='/artist_browser' onClick={this.menuCloseHandler} className={classes.menuItemMobile}><VisibiltyControl effect='zoom'>Artist Browser</VisibiltyControl></Link>
        <Link to='/festival_catalog' onClick={this.menuCloseHandler} className={classes.menuItemMobile}><VisibiltyControl effect='zoom'>Festival Catalog</VisibiltyControl></Link>
        <Link to='/partner' onClick={this.menuCloseHandler} className={classes.menuItemMobile}><VisibiltyControl effect='zoom'>Partner</VisibiltyControl></Link>
        <div  onClick={this.menuCloseHandler} className={classes.close}/>
      </div>
        </VisibiltyControl>

      )

    }
    
    return (
      <div>
      <MenuButton clicked={this.menuToggleHandler}/>
      {mobileMenuElement}
      </div>
    )
  }
}

export default MobileMenu
