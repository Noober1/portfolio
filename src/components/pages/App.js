import { createMuiTheme, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';
import { CookiesProvider, useCookies } from "react-cookie"
import '../../assets/styles/App.css';
import { ContextProvider } from '../utils/stateProvider';
import Themes from '../styling/theming';
import Buttons from './styles/buttons';

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
					<Grid container className={classes.root}>
						<Grid item xs={12}>
							<Buttons switcher={switchThemeMode}/>
						</Grid>
					</Grid>
				</CookiesProvider>
			</ThemeProvider>
		</ContextProvider>
	)
}

export default App;
