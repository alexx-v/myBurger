import React, { Component } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
	state = {
		purchasable: false,
		purchasing: false,
		loading: false,
		error: false,
	};

	componentDidMount() {
		/* 		axios
			.get('/ingredients.json')
			.then((response) => this.setState({ ingredients: response.data }))
			.catch((error) => {
				this.setState({ error: true });
			}); */
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.values(ingredients).reduce((acc, num) => acc + num, 0);

		this.setState({ purchasable: sum > 0 });
	};
	/*
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
	}; */
	/*
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
	}; */

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(
				encodeURIComponent(i) +
					'=' +
					encodeURIComponent(this.state.ingredients[i])
			);
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString,
		});
	};

	render() {
		const disabledInfo = {
			...this.props.ings,
		};

		// Adds true/false to each ingredient.
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.state.error ? (
			<p>Ingredients can't be loaded!</p>
		) : (
			<Spinner />
		);

		if (this.props.ings) {
			burger = (
				<Aux>
					<Burger ingredients={this.props.ings}>Burger</Burger>
					<BuidControls
						ingredientAdded={this.props.onIngredientAdded}
						ingredientRemoved={this.props.onIngredientRemoved}
						disabled={disabledInfo}
						price={this.props.price}
						purchasable={this.state.purchasable}
						ordered={this.purchaseHandler}
					/>
				</Aux>
			);

			orderSummary = (
				<OrderSummary
					ingredients={this.props.ings}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					price={this.props.price}
				/>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ings: state.ingredients,
		price: state.totalPrice,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ing) =>
			dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ing }),
		onIngredientRemoved: (ing) =>
			dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ing }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
