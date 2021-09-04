const styles = {
	banner: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		minHeight: [300, 400, 500],
		padding: [20, 30, 60],
		borderRadius: 6,
		position: 'relative',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
		'::after': {
			content: '""',
			display: 'block',
			width: '100%',
			height: '100%',
			background: [
				'linear-gradient(to right, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0))',
				'linear-gradient(to right, rgba(0, 0, 0, 0.48) , rgba(0, 0, 0, 0))',
			],
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 0,
		},
	},
	bannerContent: {
		marginLeft:'-7.3%',
		color: 'white',
		position: 'relative',
		zIndex: 1,
		
		p: {
			// fontSize:'30px'
			// p: {
			// 	// fontSize: [3, 4],
				
			// 	lineHeight: [1.6, 'initial'],
			// 	marginBottom: [15, 25, 30],
			// },
		},
		button: {
			marginTop: [30, 40, 60],
			svg: {
				position: 'relative',
				top: [0, '1px'],
			},
		},
	},
	opacBackgroud: {
		paddingTop:'23px',
		maxWidth: '345px',
		height: '130px',
		backgroundColor:'orange',
		paddingLeft:'0!important',
		opacity:'0.6',
		h2: {
			textAlign:'center',
			opacity: '100%',
			color: 'white',
			fontSize:'24px' ,
			textTransform:'capitalize',
			fontFamily:'Exo 2!important',
			marginLeft:'10%',
			// fontSize: ['26px', '28px'],
			lineHeight: '1.607',
			fontWeight: '400',
			// fontFamily: 'Open Sans, sans-serif',
			marginBottom: '8px',
		},
		// left: '-20!important',
	},
	mainHeader: {
		fontSize:'30px! important'
	}
};

export default styles;
