import React from 'react'
import { Grid } from '@material-ui/core'
import GridName from './gridName'
import Intro from './intro'
import Skills from './skills'
import MainFooter from './footer'

const MainPage = () => {

    return (
        <Grid container>
            <Grid item xs={12} id="main-header">
                <GridName/>
            </Grid>
            <Grid item xs={12} id="intro">
                <Intro/>
            </Grid>
            <Grid item xs={12} id="experience">
                <Skills/>
            </Grid>
            <Grid item xs={12} id="lifestyle">
                disini lifestyle
            </Grid>
            <Grid item xs={12} id="portfolio">
                portfolio
            </Grid>
            <Grid item xs={12} id="footer">
                <MainFooter/>
            </Grid>
        </Grid>
    )
}

export default MainPage
