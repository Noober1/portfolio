import createPalette from "@material-ui/core/styles/createPalette"

const Themes = (type,primaryColor) => {

	const
		blue = '#19d7fc',
		yellow = '#ffdf00',
		dark = '#303030',
		light = '#fff'

	const themeList = {
		"dark":{
			palette: createPalette({
				type: 'dark',
				name:'dark',
				navbarBackground:'#252525',
				navbarText:'#CCCCCC',
				navbarSearchBackground:'#1f1f1f',
				navbarSearchText:'#FFF',
				borderNav:'#faf005',
				progressBarColor:primaryColor,
				blockquote:'#424242',
				footerBackground:'rgb(66, 66, 66)',
				footerText:'#FFF',
				buttonHonkai:{
					borderBottomColor:'#fff'
				},
				glitchBackground:blue,
				//override
				text:{
					secondary:'#000'
				},
				postContent:{
					main:primaryColor
				},
				primary: {
					main:blue
				},
				secondary: {
					main: yellow,
				},
			}),
			overrides: {
				MuiCssBaseline: {
					'@global': {
						'*::-webkit-scrollbar': {
							width: '7px',
							backgroundColor: yellow
						},
						'*::-webkit-scrollbar-track': {
							backgroundColor:light,
							boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
						},
						'*::-webkit-scrollbar-thumb': {
							backgroundColor: yellow
						},
					},
				},
			}
		},
		"light":{
			palette: createPalette({
				type: 'light',
				name:'light',
				navbarBackground:'#F8F8F8',
				navbarText:'#606060',
				navbarSearchBackground:'#e8e8e8',
				navbarSearchText:'#1f1f1f',
				borderNav:'#28166f',
				progressBarColor:primaryColor,
				blockquote:'#E8E8E8',
				footerBackground:'rgb(66, 66, 66)',
				footerText:'#FFF',
				buttonHonkai:{
					borderBottomColor:'#212121',
				},
				glitchBackground:yellow,
				//override
				text:{
					secondary:'#FAFAFA'
				},
				postContent:{
					main:primaryColor
				},
				primary: {
					main:yellow
				},
				secondary: {
					main: blue,
				}
			}),
			overrides: {
				MuiCssBaseline: {
					'@global': {
						'*::-webkit-scrollbar': {
							width: '7px',
							backgroundColor: blue
						},
						'*::-webkit-scrollbar-track': {
							backgroundColor:dark,
							boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
						},
						'*::-webkit-scrollbar-thumb': {
							backgroundColor: blue
						},
					},
				},
			}
		}
	}

	type = typeof themeList[type] == 'undefined' ? 'light' : type

	return themeList[type]
}

export default Themes