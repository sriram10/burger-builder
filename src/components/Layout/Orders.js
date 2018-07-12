import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Order = (props) => {
  return (
    <Link to={//'/orders/'+props.title.replace(/ /g, '-')}
      {
      pathname: '/orders/'+props.title.replace(/ /g, '-'),
      search: '?id='+props.id
    }} style={{textDecoration:'none',margin:'5px', padding:'10px', backgroundColor:'#f1f1f1', display:'inline-block'}}>
      <h3>{props.title}</h3>
      <p>{props.ingredients.map((ing, i) => <span key={'ing-'+i} style={{display:'inline-block', backgroundColor: '#ccc', marginRight: '10px'}}>{ing.name}</span>)}</p>
      <h3>$ {props.price}</h3>
    </Link>
  )
}

const Orders = (props) => {
  console.log(props);
  let title = 'Orders';
  return (
    <div>
      <h1>{title + ' - ' + props.title}</h1>
      <div>
        {
          props.burgerList.map((burger, i) => <Order key={'burger-'+i} {...burger} />)
        }
      </div>
    </div>
  )
}

const mapStoreToProps = store => {
  return {
    burgerList: store.burger
  }
}

export default connect(mapStoreToProps)(Orders)