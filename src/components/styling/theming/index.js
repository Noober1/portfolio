const Themes = (type,primaryColor) => {

	const themeList = {
		"dark":{
			palette: {
				type: 'dark',
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
				//override
				text:{
					secondary:'#FAFAFA'
				},
				postContent:{
					main:primaryColor
				},
				primary: {
					main:'#5587fe'
				},
				secondary: {
					main: primaryColor,
				}
			}
		},
		"light":{
			palette: {
				type: 'light',
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
					borderBottomColor:'#212121'
				},
				//override
				text:{
					secondary:'#FAFAFA'
				},
				postContent:{
					main:primaryColor
				},
				primary: {
					main:'#5587fe'
				},
				secondary: {
					main: primaryColor,
				},
			}
		}
	}

	type = typeof themeList[type] == 'undefined' ? 'light' : type

	return themeList[type]
}

export default Themes