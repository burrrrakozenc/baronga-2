/** @jsx jsx */
import React, { useState } from 'react';
import { Box, jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';
import CartStatus from '../../cart/index';
import Container from '../../container/container';
import Header from '../secondary/header/header'
// import Header from '../header/header'
import Footer from './footer/footer';
import styles from './primary.style';
import 'bootstrap/dist/css/bootstrap.min.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import '../../custom-style/font.css'

const PrimaryLayout: React.FunctionComponent<{
	fluid?: boolean;
	showNoticeBar?: boolean;
	bgColor?: string;
	homeLink?: string;
	pathPrefix?: string;
}> = ({ fluid, showNoticeBar, bgColor, homeLink, pathPrefix, children }) => {
	const [cartBar, setCartBar] = useState(false);
	const cartBtnProps = useSpring({
		config: { mass: 1, tension: 500, friction: 48 },
		bottom: cartBar ? 87 : 30,
	});

	return (
		<SimpleReactLightbox>
			<Box
				as="main"
				sx={{
					backgroundColor: bgColor ? bgColor : 'transparent',
					...styles.main,
				}}
			>
				<Header
					// fluid={fluid}
					homeLink={homeLink}
					pathPrefix={pathPrefix}
					showNoticeBar={showNoticeBar}
				/>

				<Container fluid={fluid}>{children}</Container>

				<Waypoint
					onEnter={() => setCartBar(true)}
					onLeave={() => setCartBar(false)}
				/>
				<animated.div
					style={{ ...cartBtnProps, position: 'relative', zIndex: 9999 }}
				>
					<CartStatus btnProps={cartBtnProps} />
				</animated.div>
				<Footer fluid={fluid} />
			</Box>
		</SimpleReactLightbox>
	);
};

export default PrimaryLayout;
