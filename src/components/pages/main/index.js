import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import GridName from './gridName'
import clsx from 'clsx'
import Intro from './intro'

const useStyles = makeStyles(() => ({
    bgRed:{
        background:'red'
    },
    bgGreen:{
        background:'green'
    },
    bgBlue:{
        background:'blue'
    },
}))

const MainPage = () => {

    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12}>
                <GridName/>
            </Grid>
            <Grid item xs={12}>
                <Intro/>
            </Grid>
            <Grid item xs={12} className={classes.bgRed}>
                <GridName/>
            </Grid>
        </Grid>
    )
}

export default MainPage
