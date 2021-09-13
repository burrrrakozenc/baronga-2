const styles = {
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		minHeight: [200, 270],
		height: 600,
		width: '100%',
		borderRadius: 6,
		position: 'relative',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
		'::after': {
			content: '""',
			display: 'block',
			width: '100%',
			height: '100%',
			background:
				'linear-gradient(to top, rgba(0, 0, 0, 0.48) , rgba(0, 0, 0, 0))',
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 0,
		},

		'.gatsby-image-wrapper': {
			width: '100%',
			position: 'absolute !important',
			height: '100%',
			left: '0',
			top: '0',
		},
	},
	bannerContent: {
		color: 'white',
		position: 'relative',
		
		zIndex: 1,
		h1: {
			// fontFamily:'Exo 2!important',
			fontSize: ['17px', 4],
			fontWeight: '400',
			textTransform: 'capitalize',
		},
	},
	headerCat: {
		paddingBottom:'2rem',
		fontFamily:'Exo 2 !important',
	},
};

export default styles;
