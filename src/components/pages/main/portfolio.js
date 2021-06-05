import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import ButtonHonkai from '../../styling/buttons'
import { TitleText } from '../../styling/typography'
import { Fade } from 'react-reveal'
import portfolio1 from '../../../assets/images/portfolio1.jpg'
import portfolio2 from '../../../assets/images/portfolio2.jpg'
import portfolio3 from '../../../assets/images/portfolio3.jpg'
import portfolio4 from '../../../assets/images/portfolio4.jpg'

const portfolio = [
    {
        title:'Sistem Akademik Sekolah',
        imageUrl:portfolio1,
        desc:'School Academic System (SAS) is an school management application created with PHP',
        link:'https://sas.smkbintarjalancagak.sch.id'
    },
    {
        title:'Pendaftaran Sekolah Online',
        imageUrl:portfolio2,
        desc:'This is an application for online school registration',
        link:'https://psb.smkbintarjalancagak.sch.id'
    },
    {
        title:'Computer-Based Test System',
        imageUrl:portfolio3,
        desc:'Application for online-based Exam',
        link:'#'
    },
    {
        title:'SMK Bina Taruna Homepage',
        imageUrl:portfolio4,
        desc:'Homepage created with React',
        link:'https://web.smkbintarjalancagak.sch.id'
    },
]

const RenderCard = () => (
    <>
    {portfolio.map((item, index) => (
        <Grid item xs={12} key={index} md={6} lg={4}>
            <Fade left>
            <Box p={1}>
                <Card>
                    <CardActionArea href={item.link} target="blank">
                        <CardMedia
                            style={{height:200}}
                            image={item.imageUrl}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="p" style={{minHeight:'40px'}}>
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <ButtonHonkai variant="outlined" href={item.link}>
                            Visit
                        </ButtonHonkai>
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
            <Box p={2}>
                <Grid container className="triggerHover-titleText">
                    <Grid item xs={12}>
                        <TitleText variant="h2" component="h2" align="center" gutterBottom className="text-impact-italic">
                            Portfolio
                        </TitleText>
                    </Grid>
                    <RenderCard/>
                </Grid>
            </Box>
        </Container>
    )
}

export default Portfolio
