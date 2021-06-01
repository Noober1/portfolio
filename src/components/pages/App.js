import { AppBar, Button, createMuiTheme, Grid, IconButton, makeStyles, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';
import { CookiesProvider, useCookies } from "react-cookie"
import '../../assets/styles/App.css';
import { ContextProvider } from '../utils/stateProvider';
import Themes from '../styling/theming';
import Buttons from './styles/buttons';
import PaperCustom from './styles/paper';
import ButtonHonkai from '../styling/buttons';
import MenuIcon from '@material-ui/icons/Menu';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	const themeColor = '#E34234'

	//call "theme-mode" cookie
	const [cookies, setCookies] = useCookies(['themeMode'])

	//themeMode state
	const [themeMode, setThemeMode] = useState(() => cookies.themeMode ? cookies.themeMode : 'light')

	//create theming
	const theme = createMuiTheme(Themes(themeMode,themeColor))

	//function to switch theme
	const switchThemeMode = (mode) => {
		console.log(mode)
        setCookies('themeMode', mode, {
            path: "/",
            sameSite:'strict',
            maxAge: 3600000,
        })
		setThemeMode(mode)
    }

	const useStyles = makeStyles({
		root:{
			minHeight:'100vh',
			backgroundColor:theme.palette.background.default,
			color:theme.palette.text.primary
		}
	})

	const classes = useStyles()

	return (
		<ContextProvider themeSwitcher={switchThemeMode}>
			<ThemeProvider theme={theme}>
				<CookiesProvider>
					<Router>
						<Grid container className={classes.root} spacing={2}>
							<Grid item xs={12}>
								<AppBar position="static" component="nav" color="inherit">
									<Toolbar>
										<ButtonHonkai color="primary" component={Link} to="/">
											Home
										</ButtonHonkai>
										<ButtonHonkai color="primary" component={Link} to="/paper">
											Paper
										</ButtonHonkai>
									</Toolbar>
								</AppBar>
							</Grid>
							<Grid item xs={12}>
									<div>
										<Switch>
											<Route path="/paper">
												<PaperCustom />
											</Route>
											<Route path="/">
												<Buttons switcher={switchThemeMode}/>
											</Route>
										</Switch>
									</div>
							</Grid>
						</Grid>
					</Router>
				</CookiesProvider>
			</ThemeProvider>
		</ContextProvider>
	)
}

export default App;
