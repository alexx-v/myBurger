import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	render() {
		// Transforms an object into an array of li elements.
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(igKey) => {
				return (
					<li key={igKey}>
						<span style={{ textTransform: 'capiatlize' }}>{igKey}</span>:{' '}
						{this.props.ingredients[igKey]}
					</li>
				);
			}
		);

		return (
			<React.Fragment>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: ${this.props.price / 100}</strong>
				</p>
				<p>Continut to Checkout?</p>
				<Button clicked={this.props.purchaseCanceled} btnType={'Danger'}>
					CANCEL
				</Button>
				<Button clicked={this.props.purchaseContinued} btnType={'Success'}>
					CONTINUE
				</Button>
			</React.Fragment>
		);
	}
}

export default OrderSummary;
