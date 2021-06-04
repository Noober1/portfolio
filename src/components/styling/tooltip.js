import { withStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const HtmlTooltip = withStyles(({palette}) => ({
	tooltip: {
		backgroundColor: palette.text.primary,
		color: palette.background.paper,
		minWidth:'150px',
		textAlign:'center',
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