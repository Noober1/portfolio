import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Styling = ({ palette, spacing }) => {
	return {
        root:{
            background:'transparent',
            color:palette.text.primary,
            boxShadow:'none'
        }
	}
}

function ButtonCyber(props) {
	const { classes, children, className, color, ...other } = props;
	console.log(color)
	return (
		<Button
			variant="contained"
			color={color}
			classes={{
				root:clsx(classes.root,className),
			}}
			{...other}
		>
			{children || 'medium'}
		</Button>
	);
}

ButtonCyber.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(Styling)(ButtonCyber)