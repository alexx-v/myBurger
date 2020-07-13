import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 50,
	cheese: 40,
	meat: 130,
	bacon: 70,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 400,
		purchasable: false,
		purchasing: false,
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.values(ingredients).reduce((acc, num) => acc + num, 0);

		this.setState({ purchasable: sum > 0 });
	};

	addIngredientHandler = (type) => {
		// Solution from course
		// const oldCount = this.state.ingredients[type];
		// const updatedCount = oldCount + 1;
		// const updatedIngredients = {
		// 	...this.state.ingredients,
		// };
		// updatedIngredients[type] = updatedCount;
		// const priceAddition = INGREDIENT_PRICES[type];
		// const oldPrice = this.state.totalPrice;
		// const newPrice = oldPrice + priceAddition;
		// this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		// this.updatePurchaseState(updatedIngredients);

		// My solution
		this.setState(
			(prevState) => ({
				ingredients: {
					...prevState.ingredients,
					[type]: prevState.ingredients[type] + 1,
				},
				totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
			}),
			() => this.updatePurchaseState(this.state.ingredients)
			// () => console.log('addIngredientHandler:', this.state.ingredients)
		);
	};

	removeIngredientHandler = (type) => {
		// Solution from course
		// const oldCount = this.state.ingredients[type];
		// if (oldCount <= 0) {
		// 	return;
		// }
		// const updatedCount = oldCount - 1;
		// const updatedIngredients = {
		// 	...this.state.ingredients,
		// };
		// updatedIngredients[type] = updatedCount;
		// const priceDeduction = INGREDIENT_PRICES[type];
		// const oldPrice = this.state.totalPrice;
		// const newPrice = oldPrice - priceDeduction;
		// this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		// this.updatePurchaseState(updatedIngredients);

		// My solution
		if (this.state.ingredients[type] <= 0) return;

		this.setState(
			(prevState) => ({
				ingredients: {
					...prevState.ingredients,
					[type]:
						prevState.ingredients[type] > 0
							? prevState.ingredients[type] - 1
							: 0,
				},
				totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
			}),
			() => this.updatePurchaseState(this.state.ingredients)
			// () => console.log('removeIngredientHandler:', this.state)
		);

		this.updatePurchaseState(this.state.ingredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		alert('You continue!');
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		// Adds true/false to each ingredient.
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients}>Burger</Burger>
				<BuidControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
