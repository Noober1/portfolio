import createPalette from "@material-ui/core/styles/createPalette"

const Themes = (type,primaryColor) => {

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
				glitchBackground:'#19d7fc',
				//override
				text:{
					secondary:'#000'
				},
				postContent:{
					main:primaryColor
				},
				primary: {
					main:'#19d7fc'
				},
				secondary: {
					main: '#ffdf00',
				},
			})
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
				glitchBackground:'#ffdf00',
				//override
				text:{
					secondary:'#FAFAFA'
				},
				postContent:{
					main:primaryColor
				},
				primary: {
					main:'#ffdf00'
				},
				secondary: {
					main: '#19d7fc',
				}
			})
		}
	}

	type = typeof themeList[type] == 'undefined' ? 'light' : type

	return themeList[type]
}

export default Themes