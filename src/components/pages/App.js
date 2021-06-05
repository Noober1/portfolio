import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes, CssBaseline, Grid, makeStyles, ThemeProvider, Container } from '@material-ui/core';
import { useState } from 'react';
import { CookiesProvider, useCookies } from "react-cookie"
import { ContextProvider } from '../utils/stateProvider';
import Themes from '../styling/theming';
import { BrowserRouter as Router } from "react-router-dom";
import { MainNavbar } from '../nano';
import Routes from './Routes';
import MainFooter from '../nano/footer';

function App() {
	const themeColor = '#E34234'

	//call "theme-mode" cookie
	const [cookies, setCookies] = useCookies(['themeMode'])

	//themeMode state
	const [themeMode, setThemeMode] = useState(() => cookies.themeMode ? cookies.themeMode : 'dark')

	//create theming
	let theme = createMuiTheme(Themes(themeMode,themeColor))
	theme = responsiveFontSizes(theme)

	//function to switch theme
	const switchThemeMode = (mode) => {
        setCookies('themeMode', mode, {
            path: "/",
            sameSite:'strict',
            maxAge: 3600000,
        })
		setThemeMode(mode)
    }

	const useStyles = makeStyles(() => {
		const navbarSpacing = theme.spacing(5)

		return({
			root:{
				backgroundColor:theme.palette.background.default,
				color:theme.palette.text.primary,
				overflowX:'hidden'
			},
			mainPage:{
				minHeight:`calc(100vh - ${navbarSpacing}px)`,
				marginTop:navbarSpacing,
				paddingTop:navbarSpacing,
			}
		})
	})

	const classes = useStyles()

	return (
		<ContextProvider
			themeSwitcher={switchThemeMode}
			themeMode={themeMode}
		>
			<ThemeProvider theme={theme}>
				<CookiesProvider>
					<Router>
						<CssBaseline/>
						<Container maxWidth="xl" disableGutters style={{boxShadow:'0px 0px 10px 0px'}}>
							<Grid container className={classes.root}>
								<Grid item xs={12}>
									<MainNavbar/>
								</Grid>
								<Grid item xs={12} component="main" className={classes.mainPage}>
									<Routes/>
								</Grid>
								<Grid item xs={12} component="footer">
									<MainFooter/>
								</Grid>
							</Grid>
						</Container>
					</Router>
				</CookiesProvider>
			</ThemeProvider>
		</ContextProvider>
	)
}

export default App;
