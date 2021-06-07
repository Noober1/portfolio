import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import ButtonHonkai from '../../styling/buttons'
import { TitleText } from '../../styling/typography'
import { Fade } from 'react-reveal'
import portfolio1 from '../../../assets/images/portfolio1.jpg'
import portfolio2 from '../../../assets/images/portfolio2.jpg'
import portfolio3 from '../../../assets/images/portfolio3.jpg'
import portfolio4 from '../../../assets/images/portfolio4.jpg'
import portfolio5 from '../../../assets/images/portfolio5.jpg'
import { GitHub, Link } from '@material-ui/icons'
import HtmlTooltip from '../../styling/tooltip'

const portfolio = [
    {
        title:'Sistem Akademik Sekolah',
        imageUrl:portfolio1,
        desc:'School Academic System (SAS) is an school management application created with PHP',
        link:'https://sas.smkbintarjalancagak.sch.id',
        gitHubLink:''
    },
    {
        title:'Pendaftaran Sekolah Online',
        imageUrl:portfolio2,
        desc:'This is an application for online school registration',
        link:'https://psb.smkbintarjalancagak.sch.id',
        gitHubLink:'https://github.com/Noober1/psb-sas'
    },
    {
        title:'Computer-Based Test System',
        imageUrl:portfolio3,
        desc:'Application for online-based Exam',
        link:'#',
        gitHubLink:''
        
    },
    {
        title:'SMK Bina Taruna Homepage',
        imageUrl:portfolio4,
        desc:'Homepage created with React',
        link:'https://web.smkbintarjalancagak.sch.id',
        gitHubLink:'https://github.com/Noober1/bintar-homepage'
    },
    {
        title:'Portfolio',
        imageUrl:portfolio5,
        desc:'This portfolio web project, made with React and Material-UI',
        link:'http://cucu.ruhiyatna.com',
        gitHubLink:'https://github.com/Noober1/portfolio'
    },
]

const TooltipLink = ({text}) => (
    <Typography variant="body1">
        {text || 'Visit'}
    </Typography>
)

const RenderCard = () => (
    <>
    {portfolio.map((item, index) => (        
            <Grid key={item.title} item xs={12} md={6} lg={4}>
                <Fade bottom cascade key={index}>
                    <Box p={1}>
                        <Card>
                            <CardActionArea href={item.link} target="blank">
                                <CardMedia
                                    style={{height:200}}
                                    image={item.imageUrl}
                                    title={item.title}
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="textPrimary" component="p" style={{minHeight:'40px'}}>
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            <CardActions className="text-center d-block">
                                <HtmlTooltip arrow={true} title={<TooltipLink text="Visit Site"/>}>
                                    <IconButton href={item.link} target="blank">
                                        <Link fontSize="large"/>
                                    </IconButton>
                                </HtmlTooltip>
                                {item.gitHubLink &&
                                    <HtmlTooltip arrow={true} title={<TooltipLink text="Visit Github Repository"/>}>
                                        <IconButton href={item.gitHubLink} target="blank">
                                            <GitHub fontSize="large"/>
                                        </IconButton>
                                    </HtmlTooltip>
                                }
                            </CardActions>
                        </Card>
                    </Box>
                </Fade>
            </Grid>
    ))}
    </>
)

const Portfolio = () => {
    return (
        <Container maxWidth="lg">
            <Box pt={9} p={2}>
                <Grid container>
                    <Grid item xs={12}>
                        <Fade bottom>
                            <TitleText variant="h2" component="h2" align="center" gutterBottom className="text-impact-italic">
                                My Portfolio
                            </TitleText>
                            <Typography variant="body1" align="center" gutterBottom>
                                My projects that i made so far
                            </Typography>
                        </Fade>
                    </Grid>
                    <Fade bottom cascade>
                        <Grid container>
                            <RenderCard/>
                        </Grid>
                    </Fade>
                </Grid>
            </Box>
        </Container>
    )
}

export default Portfolio
