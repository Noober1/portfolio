import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Styling = ({ palette, spacing }) => {
	var
		underStripeBorderColor = palette.text.primary,
		buttonColor = '#212121',
		buttonDefaultBackground = 'linear-gradient(0deg, #ffdf00 30%, #efd100  90%)',
		buttonPrimaryBackground = '#19d7fc'
	

	return {
		root: {
			background: buttonDefaultBackground,
			margin:3,
			border: 0,
			display:'inline',
			position:'relative',
			borderRadius:0,
			overflow:'hidden',
			fontSize:17,
			clipPath: 'polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
			padding: '6px 17px',
			fontWeight:'bold',
			'&::after, &::before':{
				content: '\'\\00a0 \'',
				position: 'absolute'
			},
			'&::after':{
				transition:'all .2s ease-in',
				width:0,
				height:'2px',
				bottom:0,
				right:0,
				background:underStripeBorderColor,
			},
			'&:hover&::after':{
				transition:'all .2s ease-in .2s',
				width:'100%',
			},
			'&:hover&::before':{
				transition:'all .2s ease-in',
				bottom:0,
				right:0,
			},
			'&::before':{
				transition:'all .2s ease-in .2s',
				right:'-13px',
				bottom:'13px',
				width: 0,
				height: 0,
				borderBottom: '13px solid ' + underStripeBorderColor,
				borderLeft: '13px solid transparent'
			}
		},
		textPrimary:{
			background:'red'
		},
		label:{
			color:buttonColor
		},
		sizeLarge:{
			padding: '7px 30px',
			fontSize:23,
			clipPath: 'polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
			'&::before':{
				borderBottom: '13px solid ' + underStripeBorderColor,
				borderLeft: '13px solid transparent'
			}
		},
		sizeSmall:{
			padding: '3px 10px',
			fontSize:14,
			clipPath: 'polygon(5px 0%, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
			'&::before':{
				borderBottom: '7px solid ' + underStripeBorderColor,
				borderLeft: '7px solid transparent'
			}
		},
		containedPrimary:{
			display:'inline-block',
			boxShadow:'none',
			borderRadius:spacing(1),
			clipPath:'none',
			border:'2px solid transparent',
			background: buttonPrimaryBackground,
			transform:'skew(-11deg)',
			'&:hover':{
				background:buttonPrimaryBackground,
				borderColor:palette.text.primary
			},
			'&::before,&::after':{
				content:'none'
			},
			'& span:nth-child(1)':{
				transform:'skew(11deg)'
			}
		},
		outlined:{
			'&::after, &::before':{
				transition:'all .3s ease-in-out'
			},
			'&::before':{
				bottom:0,
				right:0,
				borderBottom: '9px solid ' + underStripeBorderColor,
				borderLeft: '9px solid transparent'
			},
			'&::after':{
				width:0,
				height:0,
				background:'transparent',
				top:0,
				left:0,
				borderTop: '9px solid ' + underStripeBorderColor,
				borderRight: '9px solid transparent'
			},
			'&:hover&::after,&:hover&::before':{
				transition:'all .3s ease-in-out',
				width:'100%',
			},
			'& span:nth-child(1)':{
				color:palette.text.primary
			},
			border:'2px solid ' + underStripeBorderColor,
			background:'transparent',
		},
		outlinedSizeSmall:{
			'&::after':{
				borderTop: '5px solid ' + underStripeBorderColor,
				borderRight: '5px solid transparent'
			},
			'&::before':{
				borderBottom: '5px solid ' + underStripeBorderColor,
				borderLeft: '5px solid transparent'
			},
		}
	}
}

function ButtonHonkai(props) {
	const { classes, children, className, color, ...other } = props;
	return (
		<Button
			variant="contained"
			color={color}
			classes={{
				root:clsx(classes.root,className),
				label:classes.label,
				sizeLarge:classes.sizeLarge,
				sizeSmall:classes.sizeSmall,
				containedPrimary:classes.containedPrimary,
				outlined:classes.outlined,
				outlinedSizeSmall:classes.outlinedSizeSmall

			}}
			{...other}
		>
			{children || 'medium'}
		</Button>
	);
}

ButtonHonkai.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(Styling)(ButtonHonkai)