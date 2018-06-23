import React from 'react'
import { Link } from 'react-router-dom'

const Order = (props) => {
  return (
    <Link to={//'/orders/'+props.title.replace(/ /g, '-')}
      {
      pathname: '/orders/'+props.title.replace(/ /g, '-'),
      search: '?id='+props.id
    }} style={{textDecoration:'none',margin:'5px', padding:'10px', backgroundColor:'#f1f1f1', display:'inline-block'}}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <h3>{props.price}</h3>
    </Link>
  )
}

const products = [
  {id:123, title: "Product A", desc:'uy uastfa fuashf j gfhas kfj', price:500},
  {id:124, title: "Product B", desc:'uy dfgdsfg fuashf j gfhas kfj', price:400},
  {id:125, title: "Product C", desc:'uy esrw fuashf j gfhas kfj', price:560},
  {id:126, title: "Product D", desc:'uy bnvbn fuashf j gfhas kfj', price:300},
  {id:127, title: "Product E", desc:'uy qwewqe fuashf j gfhas kfj', price:800},
]

const Orders = (props) => {
  console.log(props);
  let title = 'Orders';
  return (
    <div>
      <h1>{title + ' - ' + props.title}</h1>
      <div>
        {
          products.map(prod => <Order key={prod.id} {...prod} />)
        }
      </div>
    </div>
  )
}

export default Orders