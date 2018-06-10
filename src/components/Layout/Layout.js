import React from 'react'
import Wrap from '../../hoc/Wrap'
import { Route, Link } from 'react-router-dom'

import About from './About'

import classes from './Layout.css'

const layout = (props) => {
  return (
    <Wrap>
      <header className={classes.Menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      <Route path="/" exact render={ () => <main>{props.children}</main> } />
      <Route path="/contact" render={ () => <h1>Contact</h1> } />
      <Route path="/about" component={ About } />
    </Wrap>
  )
}

export default layout
