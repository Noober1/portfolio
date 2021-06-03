import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonHonkai from '../styling/buttons'
import { BrightnessHighTwoTone, BrightnessLowTwoTone, AddBox, AddAPhoto } from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';
import { useAppContext } from '../utils/stateProvider';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
        [breakpoints.down('sm')]: {
            display:'none'
        },
        '&::before,&::after':{
            content: '\'\\00a0 \'',
            position:'absolute',
        },
        '&::before':{
            bottom:0,
            right:0,
            width:'100%',
            height:'100%',
            transform:'skew(45deg)',
            background:palette.background.paper
        }
    },
    menuButton:{
        minWidth:'120px',
        [breakpoints.down('sm')]: {
            minWidth:'auto',
        },
    }
}))

const MainNavbar = () => {

    const { themeSwitcher, themeMode } = useAppContext()
    const theme = useTheme();
    const themeName = theme.palette.name || 'light'
    const menuButtonVariant = themeName == 'dark' ? 'contained' : 'contained'
    const menuButtonColor = themeName == 'dark' ? 'default' : 'primary'

    const isScreenSizeLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const menuButtonSize = isScreenSizeLarge ? 'medium' : 'small'

    const themeToggler = () => {
        if(themeMode == 'light') {
            themeSwitcher('dark')
        } else {
            themeSwitcher('light')
        }
    }

    const menuList = [
        { to:'/', label:'Home' },
        { to:'/button', label:'Button' },
        { to:'/paper', label:'Paper' },
        { to:'/swal', label:'Alert' }
    ]

    const MenuListRender = () => (
        <>
            {menuList.map((item, index) => {
                return(
                    <ButtonHonkai key={index} glitch={true} className={classes.menuButton} color={menuButtonColor} variant={menuButtonVariant} size={menuButtonSize} component={Link} to={item.to}>
                        {item.label}
                    </ButtonHonkai>
                )
            })}
        </>
    )

    const classes = useStyles()

    return (
        <AppBar position="fixed" component="nav" color="inherit" className={classes.mainNavbar}>
            <Toolbar className={classes.toolbar}>
                <div className={clsx(classes.menuWrapper, classes.sideLeft)}>
                    <MenuListRender/>
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
