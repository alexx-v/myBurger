import React, { memo } from 'react';

import classes from './Modal.module.css';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
					opacity: props.show ? '1' : '0',
				}}
			>
				{props.children}
			</div>
		</Aux>
	);
};

const checkIfShow = (prevProps, nextProps) => {
	return (
		prevProps.show === nextProps.show &&
		prevProps.children === nextProps.children
	);
};

export default memo(Modal, checkIfShow);
