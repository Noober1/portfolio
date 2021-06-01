import { Box, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import clsx from 'clsx'
import ButtonHonkai, { ButtonCyber } from '../../styling/buttons';

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

const Buttons = ({switcher}) => {

    const classes = useStyles()

    const switchToDark = () => switcher('dark')
    const switchToLight = () => switcher('light')

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
            <ButtonHonkai onClick={switchToLight} color="primary">
                Light Mode
            </ButtonHonkai>
            <ButtonHonkai onClick={switchToDark} color="primary">
                Dark Mode
            </ButtonHonkai>
            <Box m={1}>
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
        </>
    )
}

export default Buttons
