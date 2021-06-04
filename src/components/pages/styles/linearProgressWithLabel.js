import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { fade, makeStyles, withStyles } from '@material-ui/core';

const clipPath = 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'

const style = makeStyles(({palette}) => {
	let bg = palette.background.paper
	return{
		progressBox:{
			backgroundColor:bg,
			clipPath:clipPath
		}
	}
})

const LinearLoading = withStyles(({ palette, spacing }) => ({
	root:{
		backgroundColor:fade(palette.secondary.main, .3),
		height:'100%',
		clipPath:clipPath
	},
	barColorPrimary:{
		backgroundColor:palette.secondary.main,
		clipPath:clipPath
	}
}))(LinearProgress)

const LinearProgressWithLabel = ({ value, height, ...other}) => {

	const classes = style()
	let boxHeight = height || '20px'

	return (
		<Box display="flex" alignItems="center">
			<Box width="100%" height={boxHeight} mr={-2} className={classes.progressBox}>
				<LinearLoading variant="determinate" value={value} {...other} />
			</Box>
			<Box minWidth={35} pl={3} pr={3} className={classes.progressBox}>
				<Typography variant="body2" color="textPrimary">
					{`${Math.round(value)}%`}
				</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel