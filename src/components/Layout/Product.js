import React from 'react'
import {Link, Route} from 'react-router-dom'

const Product = ({match, location, history}) => {
  console.log('Product - ', match, location, history)

  const goToOrders = () =>{
    console.log('Start')
    // history.go(-3);
    setTimeout(() => history.push('/orders'), 5000)
  }

  return (
    <div>
      <h1>Product Page {match.params.title}</h1>
      <Link to={match.url+'/comments'}>See All comments</Link><br/>
      <button type="button" onClick={goToOrders}>Go to orders</button>
      <Route path={match.url+'/comments'} render={() => <p>test sfkjlsdfl jsfdklj asdlkfjiiejslkdfj</p> } />
    </div>
  )
}

export default Product