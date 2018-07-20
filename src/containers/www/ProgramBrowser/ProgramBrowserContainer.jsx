import React, { Component } from 'react'

import { connect } from 'react-redux'

import classes from './ProgramBrowserContainer.css';
import * as T from '../../../helpers/i18n.js';
import { Helmet } from 'react-helmet';

export class ProgramBrowserContainer extends Component {
  render() {
    return (
      <div className={classes.container}>
        
        
        <div className={classes.content}>program browser coming soon</div>
        <div className={classes.fixed}> </div>
      </div>
    )
  }
}

export default ProgramBrowserContainer
