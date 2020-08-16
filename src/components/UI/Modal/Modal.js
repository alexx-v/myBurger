import React, { memo } from 'react';

import classes from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};

const checkIfShow = (prevProps, nextProps) => {
	return (
		prevProps.show === nextProps.show &&
		prevProps.children === nextProps.children
	);
};

export default memo(Modal, checkIfShow);
