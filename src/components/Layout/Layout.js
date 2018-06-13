import React from 'react'
import Wrap from '../../hoc/Wrap'
import { Route, Link, Switch } from 'react-router-dom'

import About from './About'
import Orders from './Orders'
import Product from './Product'

import classes from './Layout.css'

const layout = (props) => {
  return (
    <Wrap>
      <header className={classes.Menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </header>
      <div className='main-content'>
        <Route path="/" exact render={ () => <main>{props.children}</main> } />
        <Route path="/contact" render={ () => <h1>Contact</h1> } />
        <Route path="/about" component={ About } />
        <Switch>
          <Route path="/orders/:id/:name" render={ (props) => <h1>Not Found - {props.match.params.name} </h1> } />
          <Route path="/orders/:title" component={ Product } />
          <Route path="/orders" component={ Orders } />
        </Switch>
      </div>
    </Wrap>
  )
}

export default layout
