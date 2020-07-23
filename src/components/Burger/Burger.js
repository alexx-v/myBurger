import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
	// Maps ingredients including their quantity.
	let transformedIngredients = Object.keys(ingredients)
		.map((igKey) => {
			// Spreads an array Array(count) and for every count returns <BurgerIngredient />. For cheese: 2, returns two BurgerIngredient.
			return [...Array(ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		// Returns an empty array if all ingredients have quantity = 0.
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default Burger;
