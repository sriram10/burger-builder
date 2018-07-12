import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerPrice from '../../components/Burger/BurgerPrice/BurgerPrice'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Wrap from '../../hoc/Wrap';
import { connect } from 'react-redux'

class BurgerBuilder extends Component {

    state = {
        burger: [],
        totalPrice: 8
    }

    addIngredient = (type) => {
        let ing = this.props.ingredients.find(el => el.type === type)
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

    add2cart = () => {
        console.log(this.state)
        if(this.state.burger.length) {
            this.props.addBurger({
                title: 'Burger',
                ingredients: this.state.burger,
                price: this.state.totalPrice
            });
            this.setState({
                burger: [],
                totalPrice: 8
            })
        } else {
            alert('No Ingridients Added!');
        }
    }

    render() {
        return (
            <Wrap>
                <Burger ingredients={this.state.burger} remove={this.removeIngredient} />
                <BurgerPrice price={this.state.totalPrice} />
                <BuildControls controls={this.props.ingredients} add={this.addIngredient} />
                <button type="button" onClick={this.add2cart}>Add To Cart</button>
            </Wrap>
        )
    }
}

const mapStateToProps = store => {
    return {
        ingredients: store.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBurger: (burger) => dispatch({type: 'ADD2CART', payload:burger})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)