import { Box, fade, Grid, makeStyles, Typography } from '@material-ui/core'
import picture1 from '../../../assets/images/picture1.png'
import picture2 from '../../../assets/images/picture2.png'
import picture3 from '../../../assets/images/picture3.png'
import clsx from 'clsx'
import React from 'react'
import SocialMediaLinks from './socialMediaLinks'
import { TitleText } from '../../styling/typography'
import { Fade } from 'react-reveal';

const useStyles = makeStyles(({palette,breakpoints,spacing}) => ({
    introBox2:{
        display:'grid',
        alignItems:'center',
        overflow:'hidden',
        height:'100%',
        minHeight:'300px',
        position:'relative',
        paddingTop:spacing(9),
        paddingBottom:spacing(4),
        [breakpoints.down('sm')]:{
            paddingTop:spacing(3)
        },
        '&::before':{
            content:'""',
            width:'100%',
            height:5,
            background:`linear-gradient(90deg, transparent 0%, ${palette.secondary.main} 100%)`,
            position:'absolute',
            bottom:0,
            right:0,
            [breakpoints.down('sm')]:{
                background:'none'
            }
        }
    },
    aboutText:{
        [breakpoints.down('sm')]:{
            textAlign:'center'
        }
    },
    bgGreen:{
        background:'green'
    },
    bgRed:{
        background:'red'
    },
    pictureSquare:{
        cursor:'pointer',
        width:'calc(100% / 3)',
        display: 'inline-block',
        height:'100%',
        minHeight:'300px',
        position:'relative'
    },
    pictureGrid:{
        background:palette.background.default,
        height:'100vh',
        maxHeight:'500px',
        [breakpoints.down('sm')]:{
            background:palette.background.default,
            overflow:'hidden'
        }
    },
    pictureWrap:{
        background:fade(palette.background.default, 1),
        boxShadow:'-4px 0px 0px 0px ' + palette.secondary.main,
        borderRight:'4px solid ' + palette.secondary.main,
        position:'absolute',
        paddingRight:'100%',
        width:0,
        height:'100%',
        overflow:'hidden',
        transform:'skew(-14deg)',
        '& > img':{
            transition:'all .3s ease-in-out',
            position:'absolute',
            opacity:.4,
            top:'-12.5%',
            transform:'translate(-25%, 0) skew(14deg)',
            '&:hover':{
                opacity:1,
                transform:'translate(-25%, 0) skew(14deg) scale(1.1) rotate(5deg)'
            }
        }
    },
    socialMediaStyle:{
        textAlign:'right',
        [breakpoints.down('sm')]:{
            textAlign:'center',
            marginTop:spacing(3)
        }
    }
}))

const Intro = () => {

    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{oveflow:'hidden'}}>
                <Fade left cascade>
                    <div className={classes.pictureGrid}>
                        <div className={classes.pictureSquare}>
                            <div className={classes.pictureWrap}>
                                <img alt="picture1" src={picture1}/>
                            </div>
                        </div>
                        <div className={classes.pictureSquare}>
                            <div className={classes.pictureWrap}>
                                <img alt="picture2" src={picture2}/>
                            </div>
                        </div>
                        <div className={classes.pictureSquare}>
                            <div className={classes.pictureWrap}>
                                <img alt="picture3" src={picture3}/>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box pl={3} pr={3} className={classes.introBox2}>
                        <Fade right>
                            <TitleText variant="h2" component="h2" align="right" className={clsx(classes.aboutText, "text-impact-italic triggerHover-titleText")} gutterBottom>
                                About Me
                            </TitleText>
                            <Typography variant="body1" component="p" gutterBottom align="right" className={classes.aboutText} >
                                Hello there, my name is Cucu Ruhiyatna.<br/>I am a junior programmer who loves watching anime, gaming, and... traveling maybe?<br/>Also like programming and making something new even I still new at programming.
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom align="right" className={classes.aboutText}>
                                I have experience in the coding world since I was a first-grader in middle school. I remember my first project is reminder apps made by PHP language, and of course it's a simple apps and still a lot of bug tho :D If you want to say 'hi' or maybe treat me with a glass of coffee? You can come to my social media. See you again, friend :D
                            </Typography>
                            <Box className={classes.socialMediaStyle}>
                                <SocialMediaLinks/>
                            </Box>
                        </Fade>
                    </Box>
            </Grid>
        </Grid>
    )
}

export default Intro
