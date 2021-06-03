import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withTheme, withStyles } from '@material-ui/core/styles';

const Styling = ({ palette, spacing }) => {
	var
		underStripeBorderColor = palette.text.primary,
		buttonColor = '#212121',
		buttonDefaultBackground = 'linear-gradient(0deg, #ffdf00 30%, #efd100  90%)',
		buttonPrimaryBackground = palette.secondary.main
	

	return {
		root: {
			background: buttonDefaultBackground,
			margin:3,
			border: 0,
			display:'inline-block',
			position:'relative',
			borderRadius:0,
			overflow:'hidden',
			fontSize:17,
			clipPath: 'polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
			padding: '8px 17px',
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
			'&:hover&::after,&.active&::after':{
				transition:'all .2s ease-in .2s',
				width:'100%',
			},
			'&:hover&::before,&.active&::before':{
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
			},
			'&:active .glitchy-object':{
				opacity:1
			}
		},
		textPrimary:{
			background:'red'
		},
		label:{
			color:buttonColor,
			textAlign:'center'
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
			// display:'inline-block',
			boxShadow:'none',
			borderRadius:spacing(1),
			clipPath:'none',
			border:'2px solid transparent',
			background: buttonPrimaryBackground,
			transform:'skew(-11deg)',
			'&:hover,&:active,&.active':{
				background:buttonPrimaryBackground,
				borderColor:palette.text.primary,
				boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
			},
			'&::before,&::after':{
				content:'none'
			},
			'& span:nth-child(1)':{
				transform:'skew(11deg)'
			}
		},
		outlined:{
			// display:'inline-block',
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
			'&:hover&::after,&:hover&::before,&:active&::after,&:active&::before':{
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
		},
		glitch:{
			position:'absolute',
			display:'grid',
			alignItems:'center',
			textAlign:'center',
			width:'100%',
			height:'100%',
			background:palette.glitchBackground || palette.primary,
			opacity:0,
			top:0,
			left:0,
			'&:hover':{
				opacity:1
			}
		}
	}
}

function ButtonHonkai(props) {
	var { classes, children, className, variant, glitch, color, ...other } = props;
	variant = variant || 'contained'
	color = color || 'default'
	return (
		<Button
			variant={variant}
			color={color}
			classes={{
				root:clsx(classes.root,className, 'glitchy'),
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
			{glitch &&
				<span className={clsx(classes.glitch, 'glitchy-object')}>
					{children}
				</span>
			}
		</Button>
	);
}

ButtonHonkai.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(Styling)(withTheme(ButtonHonkai))