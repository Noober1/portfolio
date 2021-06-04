import { Box, fade, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import SocialMediaLinks from './socialMediaLinks'


const useStyles = makeStyles(({palette,spacing,breakpoints}) => {
    let bgStripesFade = fade(palette.secondary.main, 0.7)

    return {
        gridName:{
            minHeight:'300px',
            height:`calc(100vh - ${spacing(2)}px)`,
            maxHeight:'50vh',
            display:'grid',
            alignItems:'center',
            overflow:'hidden',
            position:'relative',
            '&::before':{
                content: '\'\\00a0 \'',
                width:'100%',
                height:'50%',
                maxHeight:'300px',
                background:palette.secondary.main,
                position:'absolute',
                bottom:'-1px',
                right:0,
                clipPath:'polygon(30% 75%, 50% 75%, 53% 60%, 95% 60%, 100% 0%, 100% 100%, 0 100%, 0 50%, 25% 50%)'
            },
            [breakpoints.down('sm')]:{
                maxHeight:'350px'
            }
        },
        bgStripes:{
            backgroundImage:`linear-gradient( -45deg, ${bgStripesFade} 25%, transparent 25%, transparent 50%, ${bgStripesFade} 50%, ${bgStripesFade} 75%, transparent 75%, transparent )`,
            backgroundSize:'61px 61px',
            animation:'stripe 1.5s infinite linear'
        },
        glitchWrapper: {
            animation:'glitch-anim-1 2s linear infinite',
            fontStyle:'none',
            position:'absolute',
            top:0,
            left:0,
            width:'100%'
        },
        glitchText:{
            padding:spacing(2),
            color:palette.background.paper,
            background:palette.primary.main
        },
        socialMediaWrapper:{
            display:'block',
            textAlign:'center'
        }
    }
})

const GridName = () => {

    const classes = useStyles()

    return (
        <Box p={1} className={clsx(classes.gridName, classes.bgStripes)}>
            <div>
                <Typography variant="h1" component="h1" align="center" className="text-impact-italic text-uppercase">
                    Cucu Ruhiyatna
                    <Typography variant="h1" component="span" align="center" className={classes.glitchWrapper}>
                        <span className={clsx(classes.glitchText,"text-impact text-uppercase")}>Cucu Ruhiyatna</span>
                    </Typography>
                </Typography>
                <div className={classes.socialMediaWrapper}>
                    <SocialMediaLinks/>
                </div>
            </div>
        </Box>
    )
}

export default GridName
