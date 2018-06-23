import React from 'react'
import Wrap from '../../hoc/Wrap'
import { Route, NavLink, Link, Switch } from 'react-router-dom'

import About from './About'
import Orders from './Orders'
import Product from './Product'

import classes from './Layout.css'

const layout = (props) => {
  return (
    <Wrap>
      <header className={classes.Menu}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName={classes.aboutMenu}>About</NavLink></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><NavLink to="/orders">Orders</NavLink></li>
        </ul>
      </header>
      <div className='main-content'>
        <Route path="/" exact render={ () => <main>{props.children}</main> } />
        <Switch>
          <Route path="/contact" render={ () => <h1>Contact</h1> } />
          <Route path="/about" component={ About } />
          {/* <Route path="/orders/:id/:name" render={ (props) => <h1>Not Found - {props.match.params.name} </h1> } /> */}
          <Route path="/orders/:title" component={ Product } />
          <Route path="/orders" render={ (props) => <Orders title='This is Order Page' {...props} /> } />
          <Route path='*' render={() => <h1> 404 - Page Not Found </h1> } />
        </Switch>
        <Route path="/" render={(props) => { console.log('Footer - ',props); return <h1>Footer</h1>} } />
      </div>
    </Wrap>
  )
}

export default layout


/*

Link(to) & Route(path=string/object, exact, render/component)
*/