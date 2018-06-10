import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerPrice from '../../components/Burger/BurgerPrice/BurgerPrice'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Wrap from '../../hoc/Wrap';

const INGREDIENTS = [
    { type: 'cheese', name: 'Cheese', price: 10 },
    { type: 'salad', name: 'Salad', price: 15 },
    { type: 'bacon', name: 'Bacon', price: 20 },
    { type: 'meat', name: 'Meat', price: 25 }
];

class BurgerBuilder extends Component {

    state = {
        burger: [],
        totalPrice: 8
    }

    addIngredient = (type) => {
        let ing = INGREDIENTS.find(el => el.type === type)
        this.setState(prevState => {
            return {
                totalPrice: prevState.totalPrice + ing.price,
                burger: prevState.burger.concat(ing)
            }
        })
    }

    removeIngredient = (index) => {
        if(!this.state.burger.length) return;

        this.setState(prevState => {
            let ing = prevState.burger.splice(index, 1)[0]
            return {
                totalPrice: prevState.totalPrice - ing.price,
                burger: prevState.burger
            }
        })
    }

    render() {
        return (
            <Wrap>
                <Burger ingredients={this.state.burger} remove={this.removeIngredient} />
                <BurgerPrice price={this.state.totalPrice} />
                <BuildControls controls={INGREDIENTS} add={this.addIngredient} />
                <button type="button">Add To Cart</button>
            </Wrap>
        )
    }
}

export default BurgerBuilder