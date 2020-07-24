import * as actionTypes from '../actions/actionTypes';

const initialState = {
	ingredients: null,
	totalPrice: 400,
	error: false,
	building: false,
};

const INGREDIENT_PRICES = {
	salad: 50,
	cheese: 40,
	meat: 130,
	bacon: 70,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1,
				},
				totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
				building: true,
			};

		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1,
				},
				totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
				building: true,
			};

		case actionTypes.SET_INGREDIENTS:
			return {
				...state,
				ingredients: {
					// To preserve order of ingridients in burger.
					salad: action.ingredients.salad,
					bacon: action.ingredients.bacon,
					cheese: action.ingredients.cheese,
					meat: action.ingredients.meat,
				},
				totalPrice: 400,
				error: false,
				building: false,
			};

		case actionTypes.FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				error: true,
			};

		default:
			return state;
	}
};

export default reducer;
