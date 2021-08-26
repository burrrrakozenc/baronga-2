const styles = {
	wrapper: {
		'.handler': {
			display: 'grid',
			gridTemplateColumns: '35px 2fr 46px',
			alignItems: 'center',
			// padding: '13px 120px',
			margin: '0 auto',
			// width:'',
			color: 'primary',
			fontSize: '15px',
			fontWeight: '400',
			cursor: 'pointer',
			'@media only screen and (min-width: 768px) and (max-width: 1024px)': {
				// padding: '13px 30px',
			},
			svg: {
				flexShrink: '0',
			},
			'.chevron': {
				width: '16px',
				height: '16px',
				marginLeft: 'auto',
				transition: 'all 0.3s ease',
			},
			'&.active': {
				backgroundColor: '#F6F5F5',
				'.chevron': {
					transform: 'rotate(90deg)',
				},
			},
		},
	},
	menuText: {
		display: 'inline-flex',
		width: '200px',
		paddingTop:'7px',
		paddingBottom:'7px',
		// margin: '0 auto'
		// paddingLeft: '12px',
		// paddingRight: '12px',
	},
	subItem: {
		a: {
			color: 'primary',
			display: 'block',
			margin:'0 auto',
			justifyContent: 'center',
			fontSize: '14px',
			textDecoration: 'none',
			paddingTop:'7px',
			paddingBottom:'7px'
			// padding: '14px 20px 14px 68px',
		},
		'&.active-menu': {
			a: {
				fontWeight: 400,
			},
		},
	},
};

export default styles;
