import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
	// console.log(props.price);
	return (
		<div className={classes.BuidControls}>
			<p>
				Current Price: <strong>${props.price / 100}</strong>
			</p>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdded(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<button
				onClick={props.ordered}
				className={classes.OrderButton}
				disabled={!props.purchasable}
			>
				{props.isAuth ? 'ORDER NOW' : 'SIGH UP BEFORE ORDERING'}
			</button>
		</div>
	);
};

export default BuildControls;
