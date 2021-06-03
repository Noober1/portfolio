import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const HtmlTooltip = withStyles(({palette,spacing}) => ({
	tooltip: {
		backgroundColor: palette.text.primary,
		color: palette.background.paper,
		fontSize: 'Impact',
		position:'relative',
		borderRadius:0,
		'&::before':{
			content: '\'\\00a0 \'',
			position:'absolute',
			bottom:'-6px',
			right:0,
			width:0,
			background:palette.text.primary,
			height:'3px',
			animation:'tooltipHeartbeatStripe 1.5s linear infinite'
		}
	},
	arrow: {
		color: palette.text.primary,
	}
}))(Tooltip);

export default HtmlTooltip