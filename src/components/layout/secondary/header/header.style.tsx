const styles = {
	wrapper: {
		width: '100vw',
		minHeight: '70px',
		padding: ['11px 10px', '11px 30px'],
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'fixed',
		top: '0',
		left: '0',
		zIndex: 10,
		backgroundColor: 'white',
		boxShadow: '0 2px 4px rgba(41, 41, 41, 0.06)',
		'.logo': {
			img: {
				'@media only screen and (min-width: 768px)': {
					width: '84px',
				},
			},
		},
		'@media only screen and (max-width: 991px)': {
			'>.picksySearch': {
				display: 'none',
			},
		},
		'.picksySearch': {
			flex: 2,
			// marginLeft: 70,
			// marginRight: 70,
			input: {
				border: '0',
				backgroundColor: 'lightgray',
				transition: 'background-color 0.2s ease',
				'&:focus': {
					backgroundColor: 'muted',
				},
			},
			'.searchResult': {
				top: '100px',
			},
		},
	},
	mobileSearch: {
		width: '100%',
	},
	logoArea: {
		flex: '0.2',
		'@media only screen and (min-width: 900px) and (max-width: 1025px)': {
			flex:'0.5'
		},
		'@media only screen and (min-width: 701px) and (max-width: 899px)': {
			flex:'1'
		},
		'@media only screen and (max-width: 700px)': {
			flex:'3',
			maxWidth:'150px',
		},
	},
	menuArea: {
		flex: '3',
		'@media only screen and (max-width: 700px)': {
			flex:'0',
			
			// maxWidth:'350px',
		},
		// '@media only screen and (min-width: 780px)': {
		// 	// display: 'block',
		// 	marginRight: '4px',
		// },
	},
	hamburgBtn: {
		display: 'none',
		'@media only screen and (max-width: 1080px)': {
			display: 'inline-flex',
			marginRight: '4px',
		},
	},
	searchBtn: {
		display: 'none',
		'@media only screen and (max-width: 991px)': {
			display: 'inline-flex',
		},
	},
	icons: {
		flex: '2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		color: 'primary',
		a: {
			color: 'inherit',
			padding: ['8px 2px', '8px'],
		},
		svg: {
			width: '21px',
			height: '21px',
		},
		button: {
			position: 'relative',
			svg: {
				width: '22px',
				height: '22px',
			},
		},
	},
	iconsMain: {
		flex: '2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		fontSize:'22px',
		color: 'primary',
		a: {
			color: 'inherit',
			padding: ['8px 2px', '8px'],
			
		},
		svg: {
			width: '21px',
			height: '21px',
		},
		button: {
			position: 'relative',
			svg: {
				width: '22px',
				height: '22px',
			},
		},
		// '@media only screen and (max-width: 781px)': {

		// 	display: 'block !important',
		// 	left:'0% !imporant',
		// 	// flex: '1'

		// },
		'@media only screen and (max-width: 991px)': {
			// display: 'none',
			fontSize:'22px',
		},
	},
	badge: {
		minWidth: '14px',
		minHeight: '16px',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontSize: '12px',
		lineHeight: '14px',
		fontWeight: '700',
		backgroundColor: 'primary',
		position: 'absolute',
		top: '9px',
		right: '7px',
		paddingLeft: '2px',
		paddingRight: '2px',
	},
	navMenuItems: {
		display: 'inline-flex',
		'@media only screen and (max-width: 991px)': {
			display: 'none',

		},
	},
	navBarBox: {
		// width:300,
		'@media only screen and (max-width: 991px)': {
			// width:'0'
			display: 'none'
		},
	}
};

export default styles;
