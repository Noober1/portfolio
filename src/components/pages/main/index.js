import React from 'react'
import { Grid, useTheme } from '@material-ui/core'
import GridName from './gridName'
import Intro from './intro'
import Skills from './skills'
import LifeStyle from './lifestyle'
import Quotes from './quotes'
import Portfolio from './portfolio'

const MainPage = () => {

    const { spacing } = useTheme()

    return (
        <Grid container style={{marginTop:spacing(-5)}}>
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
                <LifeStyle/>
            </Grid>
            <Grid item xs={12} id="portfolio">
                <Portfolio/>
            </Grid>
            <Grid item xs={12} id="quotes">
                <Quotes/>
            </Grid>
        </Grid>
    )
}

export default MainPage
