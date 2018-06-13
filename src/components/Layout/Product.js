import React from 'react'
import {Link} from 'react-router-dom'

const Product = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Product Page {props.match.params.title}</h1>
      <Link to='/orders' >Go to orders </Link>
    </div>
  )
}

export default Product