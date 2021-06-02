import { AppBar, Box, Container, createMuiTheme, CssBaseline, Grid, makeStyles, ThemeProvider, Toolbar } from '@material-ui/core';
import { useState } from 'react';
import { CookiesProvider, useCookies } from "react-cookie"
import '../../assets/styles/App.css';
import { ContextProvider } from '../utils/stateProvider';
import Themes from '../styling/theming';
import Buttons from './styles/buttons';
import PaperCustom from './styles/paper';
import ButtonHonkai from '../styling/buttons';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import SwalPage from './styles/swal';

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
        setCookies('themeMode', mode, {
            path: "/",
            sameSite:'strict',
            maxAge: 3600000,
        })
		setThemeMode(mode)
    }

	const useStyles = makeStyles({
		root:{
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
						<CssBaseline/>
						<Container maxWidth="xl" style={{padding:0}}>
							<Grid container className={classes.root}>
								<Grid item xs={12}>
									<AppBar position="static" component="nav" color="inherit">
										<Toolbar>
											<ButtonHonkai color="primary" component={Link} to="/">
												Home
											</ButtonHonkai>
											<ButtonHonkai color="primary" component={Link} to="/paper">
												Paper
											</ButtonHonkai>
											<ButtonHonkai color="primary" component={Link} to="/swal">
												Swal
											</ButtonHonkai>
										</Toolbar>
									</AppBar>
								</Grid>
								<Grid item xs={12} component="main">
									<Box p={2}>
										<Switch>
											<Route path="/paper">
												<PaperCustom />
											</Route>
											<Route path="/swal">
												<SwalPage/>
											</Route>
											<Route path="/">
												<Buttons switcher={switchThemeMode}/>
											</Route>
										</Switch>
									</Box>
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
