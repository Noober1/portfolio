import { Box, Chip, Container, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import  { LinearProgressWithLabel } from '../../styling/progress'
import picture4 from '../../../assets/images/picture4.png'
import clsx from 'clsx'
import ButtonHonkai from '../../styling/buttons'
import { TitleText } from '../../styling/typography'
import { Fade } from 'react-reveal'

// percentage of skills
const mySkills = [
    {
        name: "Web Front-End",
        value: 30,
        apps:["HTML","CSS","Javascript"]
    },
    {
        name: "Web Back-End",
        value: 45,
        apps:["PHP","Node.js"]
    },
    {
        name: "Graphic Design",
        value: 20,
        apps:["Photoshop","Premiere","CorelDraw","Blender","Maya"]
    },
    {
        name: "Operating System",
        value: 10,
        apps:["CentOS","Debian","Windows","KALI"]
    },
    {
        name: "Office Software",
        value: 75,
        apps:["Word","Excel","PowerPoint","Publisher"]
    },
    {
        name:"Framework",
        value:60,
        apps:["CodeIgniter","Express.JS","Socket.IO","React","Next.JS","JQuery","Bootstrap","Material-UI"]
    },
    {
        name:"DBMS",
        value:50,
        apps:["MongoDB","MariaDB"]
    },
    {
        name:"Networking",
        value:60,
        apps:["Mikrotik","Cisco"]
    }
]

const styles = makeStyles(theme => {

    let triangleBg = {
        content:'""',
        zIndex:0,
        width:0,
        height:0,
        background:`url(${picture4}) no-repeat top right fixed`,
        backgroundSize:'100vh',
        position:'absolute',
        opacity:.3,
        right:0,
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }

    return {
        skillsContainer:{
            overflow:'hidden',
            position:'relative',
            '&::before':{
                ...triangleBg,
                borderRight:'25vw solid transparent',
                borderBottom:'25vw solid ' + theme.palette.background.default,
                top:0,
            },
        },
        textShadow:{
            textShadow:'0px 0px 2px ' + theme.palette.background.paper
        },
        triagleBg:{
            ...triangleBg,
            borderRight:'100vh solid transparent',
            borderTop:'100vh solid ' + theme.palette.background.default,
            bottom:0
        }
    }
})

const Skills = () => {

    const classes = styles()

    const theme = useTheme()
    const isScreenSm = useMediaQuery(theme.breakpoints.down('sm'))
    const textAlignByScreen = isScreenSm ? 'center' : 'left'

    const RenderMySkills = () => (
        <Fade left cascade>
            {mySkills.map(item => (
                <Box key={item.name} style={{position:'relative'}}>
                    <Typography variant="h5" component="h3" className="text-impact-italic">
                        {item.name}
                    </Typography>
                    <LinearProgressWithLabel height="10px" value={item.value} />
                </Box>
            ))}
        </Fade>
    )

    const RenderSkillChips = ({items}) => (
        <>
        {items.map(item => (
            <ButtonHonkai size="small" color="primary" key={item}>{item}</ButtonHonkai>
        ))}
        </>
    )

    const RenderSkillDesc = () => (
        <Fade right cascade opposite={true}>
            {mySkills.map(item => (
                <Box key={item.name} mb={1}>
                    <Typography variant="subtitle1" component="h5" className="text-impact-italic">
                        {item.name}
                    </Typography>
                    <RenderSkillChips items={item.apps}/>
                </Box>
            ))}
        </Fade>
    )

    return (
        <Box pt={9} pb={6} className={classes.skillsContainer}>
            <span className={classes.triagleBg}/>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{position:'relative'}}>
                        <Fade left>
                            <TitleText variant="h2" component="h2" gutterBottom className={clsx(classes.textShadow,"text-impact-italic triggerHover-titleText")} align={textAlignByScreen}>
                                My Experience
                            </TitleText>
                        <Typography variant="body1" component="div" className={classes.textShadow} gutterBottom align={textAlignByScreen}>
                            I love to learn something, especially about programming and designing
                        </Typography>
                        </Fade>
                        <Box m={2}>
                            <RenderMySkills/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box m={2} style={{position:'relative'}}>
                            <Typography component="div" align={textAlignByScreen}>
                                <RenderSkillDesc/>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Skills
