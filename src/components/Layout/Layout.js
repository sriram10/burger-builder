import React from 'react'
import Wrap from '../../hoc/Wrap'

const layout = (props) => {
  return (
    <Wrap>
      <div>Toolbar</div>
      <main>{props.children}</main>
    </Wrap>
  )
}

export default layout
