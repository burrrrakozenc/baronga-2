const styles = {
	wrapper: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'auto',
		margin: '0 auto',
		textAlign: 'center',
		'.tree-menu ': {
			'.parent': {
				'@media only screen and (max-width: 1440px)': {
					'svg:not(.chevron)': {
						width: '25px',
						height: '25px',
					},
					'.handler span': {
						paddingLeft: '8px',
						paddingRight: '10px',
					},
					'&.organic': {
						'svg:not(.chevron)': {
							width: '23px',
							height: '23px',
						},
					},
					'&.fish--meat': {
						'svg:not(.chevron)': {
							width: '30px',
							height: '30px',
						},
					},
				},
			},
		},
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		// justifyContent: 'space-between',
		textAlign: 'center',
		justifyContent: 'center',
		padding: ['20px 18px 15px 30px', '20px 30px 15px'],
		button: {
			minWidth: 'auto',
			minHeight: 'auto',
			display: 'none',
			'@media only screen and (max-width: 1024px)': {
				display: 'inline-flex',
			},
		},
	},
	text: {
		color: 'black',
		fontWeight: '600',
		fontSize: ['17px', '15px'],
		margin: '0 auto',
		paddingBottom: 20

	},
	textCategoryHeader: {
		color: 'black',
		fontWeight: '600',
		fontSize: ['17px', '15px'],
		margin: '0 auto',

	},
	categoryBox: {
		'@media only screen and (min-width: 911px)': {
			display: 'none',
		},
	},
};

export default styles;
