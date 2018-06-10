import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.name}</div>
      <button className={classes.More} type="button" onClick={ (e) => {props.add(props.type)} }>+</button>
    </div>
  )
}

export default buildControl