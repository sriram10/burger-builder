import React from 'react'
import classess from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {
  const controls = props.controls.map((c)=> {
    return <BuildControl key={c.type} name={c.name} type={c.type} add={props.add} /> 
  })

  return (
    <div className={classess.BuildControls}>
      {
        controls
      }
    </div>
  )
}

export default BuildControls