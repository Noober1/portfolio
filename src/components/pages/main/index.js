import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import GridName from './gridName'

const useStyles = makeStyles(() => ({
    bgRed:{
        background:'red'
    },
    bgGreen:{
        background:'green'
    },
    bgBlue:{
        background:'blue'
    }
}))

const MainPage = () => {

    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12}>
                <GridName/>
            </Grid>
            <Grid item xs={12} className={classes.bgBlue}>
                text
            </Grid>
        </Grid>
    )
}

export default MainPage
