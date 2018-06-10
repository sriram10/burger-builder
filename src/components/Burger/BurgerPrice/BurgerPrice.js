import React from 'react'

const burgerPrice = (props) => {
  return (
    <h3>
      Your Burger Price: 
      <span style={{color:'red'}}>${props.price}</span>
    </h3>
  );
}

export default burgerPrice