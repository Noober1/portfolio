import { makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const styles = makeStyles(({palette}) => ({
    main:{
        position:'relative',
        zIndex:0,
        textShadow:'0px 3px 0px ' + palette.background.paper,
        '&:hover&::before':{
            width:'calc(75% + 10px)',
            right:'25%'
        },
        '&::before':{
            transition:'all .2s ease-in-out',
            zIndex:-1,
            content:'""',
            background:palette.primary.main,
            width:'50%',
            height:'30%',
            transform:'skew(-11deg)',
            position:'absolute',
            bottom:0,
            right:0
        }
    }
}))

const TitleText = ({className, children, ...other}) => {

    const classes = styles()

    return (
        <Typography
            className={className}
            {...other}
        >
            <span className={clsx('title-text-span', classes.main)}>
                {children}
            </span>
        </Typography>
    )
}

export default TitleText