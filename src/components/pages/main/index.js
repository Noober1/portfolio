import React from 'react'
import clsx from 'clsx'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(({spacing}) => ({
    resHeight:{
        minHeight:'300px',
        display:'grid',
        alignItems:'center'
    },
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
            <Grid item xs={12} className={classes.bgRed}>
                <Box p={1} className={classes.resHeight}>
                    <Typography variant="h1" component="h1" align="center" className="text-impact-italic text-uppercase">
                        Welcome to the jungle
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.bgBlue}>
                test
            </Grid>
        </Grid>
    )
}

export default MainPage
