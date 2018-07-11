import React, { Component } from 'react'

import classes from './PlatformMenu.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

class PlatformMenu extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    let selection= event.currentTarget.textContent
    if (selection=="") {
      this.setState({ anchorEl: null})
      return
    }
    this.setState({ anchorEl: null});
    
    this.props.onChange(selection)
  };


  render() {

    const { anchorEl } = this.state;
    return (
      <div>
      <Button
      aria-owns={anchorEl ? 'fade-menu' : null}
      aria-haspopup="true"
      onClick={this.handleClick}
    >
    {this.props.selectedPlatform}
    </Button>
    <Menu
    className={classes.backdrop}
      id="fade-menu"
      anchorEl={anchorEl}
      
      open={Boolean(anchorEl)}
      onClose={this.handleClose}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={this.handleClose}>Facebook Messenger</MenuItem>
      <MenuItem onClick={this.handleClose}>Kik Messenger</MenuItem>
      <MenuItem onClick={this.handleClose}>Skype</MenuItem>
      <MenuItem onClick={this.handleClose}>Viber</MenuItem>
    </Menu>
      </div>
    )
  }
}

export default PlatformMenu
