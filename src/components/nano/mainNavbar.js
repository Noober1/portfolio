import { AppBar, Box, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonHonkai from '../styling/buttons'
import { Brightness2, Brightness2Outlined, ColorLens } from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';
import { useAppContext } from '../utils/stateProvider';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx'
import HtmlTooltip from '../styling/tooltip';
import PopupHonkai from '../styling/alert'

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
    const menuButtonVariant = themeName === 'dark' ? 'contained' : 'contained'
    const menuButtonColor = themeName === 'dark' ? 'default' : 'primary'

    const PopupDialog = () => (
        <Box>
            <Typography variant="body1" gutterBottom>
                Choose your desire color scheme by clicking the button below.<br/>Currently, color scheme only have 2 variant.
            </Typography>
            <ButtonHonkai size="large" onClick={() => themeSwitcher('dark')}>
                Dark
            </ButtonHonkai>
            <ButtonHonkai size="large" onClick={() => themeSwitcher('light')}>
                Light
            </ButtonHonkai>
        </Box>
    )

    const isScreenSizeLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const menuButtonSize = isScreenSizeLarge ? 'medium' : 'small'

    const themeToggler = () => {
        if(themeMode === 'light') {
            themeSwitcher('dark')
        } else {
            themeSwitcher('light')
        }
    }

    const menuList = [
        { to:'#', label:'Home' },
        { to:'#intro', label:'About Me' },
        { to:'#experience', label:'Experience' },
        { to:'#portfolio', label:'Portfolio' },
    ]

    const menuListBackup = [
        { to:'/', label:'Home' },
        { to:'/button', label:'Button' },
        { to:'/paper', label:'Paper' },
        { to:'/swal', label:'Alert' },
        { to:'/progress', label:'Progress' },
        { to:'/typography', label:'Typography' }
    ]

    const MenuListRender = () => (
        <>
            {menuList.map((item, index) => {
                return(
                    <ButtonHonkai
                        // exact
                        key={index}
                        glitch={true}
                        className={classes.menuButton}
                        color={menuButtonColor}
                        variant={menuButtonVariant}
                        size={menuButtonSize}
                        // component={NavLink}
                        // to={item.to}
                        href={item.to}
                        // activeClassName="active"
                    >
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
                    <HtmlTooltip
                        placement="left"
                        arrow={true}
                        title={
                            <Typography variant="subtitle1" component="span">
                                Switch to {themeMode === 'light' ? 'dark mode' : 'light mode'}
                            </Typography>
                        }
                    >
                        <IconButton color="secondary" onClick={themeToggler} >
                            {themeMode === 'light' ? <Brightness2/> : <Brightness2Outlined/>}
                        </IconButton>
                    </HtmlTooltip>
                    <PopupHonkai
                        title="Switch color scheme"
                        html={<PopupDialog/>}
                        confirmButtonText={'Close'}
                    >
                        <HtmlTooltip
                            placement="left"
                            arrow={true}
                            title={
                                <Typography variant="subtitle1" component="span">
                                    Switch color scheme
                                </Typography>
                            }
                        >
                            <IconButton color="secondary">
                                <ColorLens/>
                            </IconButton>
                        </HtmlTooltip>
                    </PopupHonkai>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MainNavbar
