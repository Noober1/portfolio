import { Box, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import clsx from 'clsx'
import ButtonHonkai from '../../styling/buttons';

const useStyles = makeStyles(theme => ({
    marginLeft: {
        margin:'5px'
    },
    padding:{
        padding:theme.spacing(2)
    },
    honkaiTitle:{
        fontFamily:'Impact, sans-serif'
    },
    italicCustom:{
        transform:'skew(-11deg)'
    }
}))

const Buttons = () => {

    const classes = useStyles()

    const Title = ({title,subtitle}) => (
        <>
        <Typography variant="h2" className={clsx(classes.marginLeft,classes.honkaiTitle,classes.italicCustom)}>
            {title}
        </Typography>
        <Typography variant="h4" className={clsx(classes.marginLeft,classes.honkaiTitle)}>
            {subtitle}
        </Typography>
        </>
    )

    return (
        <>
            <Box m={1} mt={4}>
                <Title title="Button Honkai Style" subtitle="Yellow"/>
                <ButtonHonkai size="small">
                    Small
                </ButtonHonkai>
                <ButtonHonkai>
                    Medium (default)
                </ButtonHonkai>
                <ButtonHonkai size="large">
                    Large
                </ButtonHonkai>
                <Paper className={classes.padding}>
                    {`<ButtonHonkai size="size">Text</ButtonHonkai>`}
                </Paper>
            </Box>
            <Box m={1}>
                <Title title="Button Honkai Style" subtitle="Blue"/>
                <ButtonHonkai color="primary" size="large">
                    Large
                </ButtonHonkai>
                <ButtonHonkai color="primary" size="large">
                    Large
                </ButtonHonkai>
                <ButtonHonkai color="primary" size="large">
                    Large
                </ButtonHonkai>
                <br/>
                <ButtonHonkai color="primary">
                    Medium (default)
                </ButtonHonkai>
                <ButtonHonkai color="primary">
                    Medium (default)
                </ButtonHonkai>
                <ButtonHonkai color="primary">
                    Medium (default)
                </ButtonHonkai>
                <br/>
                <ButtonHonkai color="primary" size="small">
                    Large
                </ButtonHonkai>
                <ButtonHonkai color="primary" size="small">
                    Large
                </ButtonHonkai>
                <ButtonHonkai color="primary" size="small">
                    Large
                </ButtonHonkai><br/><br/>
                <Paper className={classes.padding}>
                    {`<ButtonHonkai size="size" color="primary">Text</ButtonHonkai>`}
                </Paper>
            </Box>
            <Box m={1}>
                <Title title="Button Honkai Style" subtitle="outlined"/>
                <ButtonHonkai variant="outlined" size="small">
                    Small
                </ButtonHonkai>
                <ButtonHonkai variant="outlined">
                    Medium (default)
                </ButtonHonkai>
                <ButtonHonkai variant="outlined" size="large">
                    Large
                </ButtonHonkai><br/>
                <Paper className={classes.padding}>
                    {`<ButtonHonkai variant="outlined" size="size">Large</ButtonHonkai>`}
                </Paper>
            </Box>
            <Box m={1}>
                <Title title="Button Honkai Style" subtitle="outlined"/>
                <ButtonHonkai variant="outlined" size="small">
                    Small
                </ButtonHonkai>
                <ButtonHonkai variant="outlined">
                    Medium (default)
                </ButtonHonkai>
                <ButtonHonkai variant="outlined" size="large">
                    Large
                </ButtonHonkai><br/>
                <Paper className={classes.padding}>
                    {`<ButtonHonkai variant="outlined" size="size">Large</ButtonHonkai>`}
                </Paper>
            </Box>
            <Box m={1}>
                <Title title="Button Honkai Style with glitch" subtitle="outlined"/>
                <ButtonHonkai glitch={true} variant="outlined">
                    Medium (default)
                </ButtonHonkai><br/>
                <Paper className={classes.padding}>
                    {`<ButtonHonkai glitch={true} variant="outlined">`}
                </Paper>
            </Box>
        </>
    )
}

export default Buttons
