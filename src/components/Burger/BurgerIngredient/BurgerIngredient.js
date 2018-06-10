import React from 'react'
import classes from './BurgerIngredient.css'

const BurgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type) {
        case 'bread-top':
            ingredient = (<div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>)
        break;
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>
        break;
        case 'meat':
            ingredient = <div className={classes.Meat} onClick={ e => props.remove(props.order) } title='click me to remove!'></div>
        break;
        case 'cheese':
            ingredient = <div className={classes.Cheese} onClick={ e => props.remove(props.order) } title='click me to remove!'></div>
        break;
        case 'salad':
            ingredient = <div className={classes.Salad} onClick={ e => props.remove(props.order) } title='click me to remove!'></div>
        break;
        case 'bacon':
            ingredient = <div className={classes.Bacon} onClick={ e => props.remove(props.order) } title='click me to remove!'></div>
        break;
        default:
            ingredient = null;
        break;
    }

    return ingredient;
}

export default BurgerIngredient