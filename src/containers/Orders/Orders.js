import React, { Component } from 'react';

import Order from '../../components/Order/Order';

export default class Orders extends Component {
	state = {};

	render() {
		return (
			<div>
				<Order />
				<Order />
			</div>
		);
	}
}
