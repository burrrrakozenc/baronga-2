const styles = {
	wrapper: {
		
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		minHeight: ['270px', '280px'],
		borderRadius: '5px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '34px 30px 40px',
		'@media screen and (min-width: 1920px)': {
			minHeight: '325px',
			padding: '34px 40px 40px',
		},
	},
	content: {
		// paddingTop:'50px',
		// bottom:'-10%',
		maxWidth: '200px',
		height: '150px',
		width: '100%',
		marginLeft:'-7.5%',
		marginBottom:'-45%',
		// paddingLeft:'100px',
		// marginLeft:'0',
		opacity: '100%',
		justifyContent: 'center',
		'@media screen and (max-width: 768px)': {
			marginLeft:'-9.65%',
			marginBottom:'-55%'
		},
		
		h3: {
			paddingTop:'1rem',
			// justifyContent:'center',
			opacity: '100%',
			color: 'white',
			fontSize:'18px ' ,
			fontFamily:'Exo 2!important',
			marginLeft:'10%',
			// fontSize: ['22px', '28px'],
			lineHeight: '1.607',
			fontWeight: '600',
			// fontFamily: 'Open Sans, sans-serif',
			// marginBottom: '8px',
		},
		p: {
			color: 'primary',
			fontSize: '14px',
			lineHeight: '1.785',
		},
		a: {
			textDecoration:'none',
			display: 'inline-block',
			'&:hover':{
				textDecoration:'none',
			}
		},
		button: {
			minWidth: '130px',
			minHeight: '45px',
			borderRadius: '5px',
			boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
			fontSize: '14px',
			fontWeight: '600',
			// fontFamily: 'Open Sans, sans-serif',
			marginTop: '20px',
			transition: 'all 0.2s ease',
			'@media screen and (min-width: 768px)': {
				minWidth: '130px',
				minHeight: '45px',
			},
			':hover': {
				opacity: '0.999',
			},
		},
	},
	tag: {
		color: 'white',
		fontSize: '12px',
		fontWeight: '600',
		textTransform: 'uppercase',
		borderRadius: '5px',
		display: 'inline-block',
		padding: '5px 10px',
		marginBottom: '8px',
	},
	opacBackgroud: {
		// paddingTop:'23px',
		maxWidth: '255px',
		height: '130px',
		backgroundColor:'orange',
		paddingLeft:'0!important',
		opacity:'0.6',
		top:'40%!important',
		left: '-10!important',
	}
};

export default styles;
