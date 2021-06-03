import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import picture1 from '../../../assets/images/picture1.png'
import picture2 from '../../../assets/images/picture2.png'
import picture3 from '../../../assets/images/picture3.png'

import React from 'react'

const useStyles = makeStyles(theme => ({
    introBox:{
        minHeight:'300px',
        height:'50vh',
        maxHeight:'50vh'
    },
    introBox2:{
        display:'grid',
        alignItems:'center',
        overflow:'hidden',
        height:'50vh',
    },
    bgGreen:{
        background:'green'
    },
    bgRed:{
        background:'red'
    },
    pictureSquare:{
        width:'calc(100% / 3)',
        display: 'inline-block',
        height:'100%',
        position:'relative'
    },
    pictureGrid:{
        height:'50vh',
        [theme.breakpoints.down('sm')]:{
            overflow:'hidden'
        }
    },
    pictureWrap:{
        background:theme.palette.text.primary,
        boxShadow:'-5px 0px 0px 0px ' + theme.palette.secondary.main,
        position:'absolute',
        paddingRight:'100%',
        width:0,
        height:'100%',
        borderBottom:'5px solid ' +  theme.palette.secondary.main,
        overflow:'hidden',
        transform:'skew(-14deg)',
        '& > img':{
            opacity:.5,
            transition:'all .3s ease-in-out',
            position:'absolute',
            top:'-12.5%',
            transform:'translate(-25%, 0) skew(14deg)',
            '&:hover':{
                transform:'translate(-25%, 0) skew(14deg) scale(1.2)',
                opacity:1
            }
        }
    }
}))

const Intro = () => {

    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{oveflow:'hidden'}}>
                <div className={classes.pictureGrid}>
                    <div className={classes.pictureSquare}>
                        <div className={classes.pictureWrap}>
                            <img src={picture1}/>
                        </div>
                    </div>
                    <div className={classes.pictureSquare}>
                        <div className={classes.pictureWrap}>
                            <img src={picture2}/>
                        </div>
                    </div>
                    <div className={classes.pictureSquare}>
                        <div className={classes.pictureWrap}>
                            <img src={picture3}/>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{zIndex:1}}>
                <Box pl={2} pt={2} pr={3} className={classes.introBox2}>
                    <div>
                        <Typography variant="h2" component="h2" align="right" className="text-impact-italic" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom align="right">
                            Hello, my name is Cucu Ruhiyatna. I am a simple human with high curiosity.
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom align="right">
                            I studied programming since the 9th grade of junior high school. the first programming language I learned was python. Then I continued to learn C++, HTML, CSS, PHP, and Javascript in sequence.
                        </Typography>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Intro
