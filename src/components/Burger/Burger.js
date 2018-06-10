import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = props => {
    const transformed = props.ingredients
        .map((ing, i) => {
            return <BurgerIngredient key={ing.type+i} type={ing.type} order={i} remove={props.remove} />  
        })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformed.length ? transformed : <p>Add ingredients!</p>}
            <BurgerIngredient type="bread-bottom" />
        </div> 
    )
}

export default Burger