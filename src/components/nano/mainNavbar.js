import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonHonkai from '../styling/buttons'
import { BrightnessHighTwoTone, BrightnessLowTwoTone, AddBox, AddAPhoto } from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';
import { useAppContext } from '../utils/stateProvider';
import clsx from 'clsx'

const useStyles = makeStyles(({palette,breakpoints, spacing}) => ({
    mainNavbar:{
        zIndex:1,
        height:spacing(5),
        boxShadow:'none'
    },
    toolbar:{
        padding:0,
        [breakpoints.down('xl')]: {
            minHeight:'auto'
        }
    },
    menuWrapper:{
        padding:spacing(1),
        paddingLeft:spacing(2),
        paddingRight:spacing(2),
        display:'inline'
    },
    sideLeft:{
        position:'relative',
        '&::before,&::after':{
            content: '\'\\00a0 \'',
            position:'absolute',
        },
        '&::before':{
            bottom:0,
            left:0,
            width:'100%',
            height:'100%',
            background:palette.background.paper
        },
        '&::after':{
            bottom:0,
            right:'-32px',
            width:0,
            height:0,
            borderRight:'32px solid transparent',
            borderTop:'32px solid ' + palette.background.paper,
        }
    },
    sideRight:{
        position:'absolute',
        top:0,
        right:0,
        textAlign:'right',
        '&::before,&::after':{
            content: '\'\\00a0 \'',
            position:'absolute',
        },
        '&::before':{
            bottom:0,
            right:0,
            width:'100%',
            height:'100%',
            transform:'skew(13deg)',
            background:palette.background.paper
        }
    }
}))

const MainNavbar = () => {

    const { themeSwitcher, themeMode } = useAppContext()

    const themeToggler = () => {
        if(themeMode == 'light') {
            themeSwitcher('dark')
        } else {
            themeSwitcher('light')
        }
    }

    const classes = useStyles()

    return (
        <AppBar position="fixed" component="nav" color="inherit" className={classes.mainNavbar}>
            <Toolbar className={classes.toolbar}>
                <div className={clsx(classes.menuWrapper, classes.sideLeft)}>
                    <ButtonHonkai color="primary" component={Link} to="/">
                        Home
                    </ButtonHonkai>
                    <ButtonHonkai color="primary" component={Link} to="/button">
                        Buttons
                    </ButtonHonkai>
                    <ButtonHonkai color="primary" component={Link} to="/paper">
                        Paper
                    </ButtonHonkai>
                    <ButtonHonkai color="primary" component={Link} to="/swal">
                        Swal
                    </ButtonHonkai>
                </div>
                <div className={clsx(classes.menuWrapper, classes.sideRight)}>
                    <IconButton color="secondary" onClick={themeToggler} >
                    {themeMode == 'light' ? <BrightnessHighTwoTone/> : <BrightnessLowTwoTone/>}
                    </IconButton>
                    <IconButton color="secondary">
                        <AddBox/>
                    </IconButton>
                    <IconButton color="secondary">
                        <AddAPhoto/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MainNavbar
