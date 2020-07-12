import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
	// Transforms an object into an array of li elements.
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capiatlize' }}>{igKey}</span>:{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: ${props.price / 100}</strong>
			</p>
			<p>Continut to Checkout?</p>
			<Button clicked={props.purchaseCanceled} btnType={'Danger'}>
				CANCEL
			</Button>
			<Button clicked={props.purchaseContinued} btnType={'Success'}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
