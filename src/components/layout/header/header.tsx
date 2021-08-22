/** @jsx jsx */
import { useState, useContext, useEffect, useRef, Fragment } from 'react';
import { Flex, Box, Text, Button, jsx } from 'theme-ui';
import { IoIosMenu } from 'react-icons/io';
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShoppingCart,
} from 'react-icons/ai';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import {Link} from 'gatsby'
import Logo from '../../logo/logo';
// import Search from '../../search';
import Sidebar from '../secondary/sidebar/sidebar'
import DrawerCart from '../../drawer-cart/drawer-cart'
import { LocalCartContext } from '../../../provider/local-cart-provider';
import useWindowSize from '../../../hooks/useWindowSize';
import useOnClickOutside from '../../../hooks/useOutsideClick';
import styles from './header.style';
import styles2 from '../primary/header/navbar/navbar.style'
import styles3 from '../secondary/header/header';
import '../../custom-style/font.css'

const Header = () => {
	const [sidebarVisibile, setSidebarVisible] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);
	const mobileSearchRef = useRef(null!);
	useOnClickOutside(mobileSearchRef, () => setMobileSearch(false));
	const { products } = useContext(LocalCartContext);
	const windowSize = useWindowSize();
	useEffect(() => {
		if (windowSize && windowSize > 1024) {
			setSidebarVisible(false);
		}
	}, [windowSize]);

	return (
		<Fragment>
			<Box as="header" sx={styles.wrapper}>
				{mobileSearch ? (
					<div></div>
					// <Box sx={styles.mobileSearch} ref={mobileSearchRef}>
					// 	<Search />
					// </Box>
				) : (
					<Fragment>
						<Flex sx={styles.logoArea}>
							<Button
								variant="text"
								sx={styles.hamburgBtn}
								onClick={() => setSidebarVisible(true)}
								ariaLabel="Hamburg menu"
							>
								<IoIosMenu />
							</Button>

							<Logo path="/" />
						<h3 style={{
							alignItems: 'middle',
							justifyContent: 'center',
							padding: '20px',
							marginTop: 10
						}}>
							BARONGA
						</h3>
						</Flex>
						{/* <Search /> */}
						<Box sx={styles.icons}>
							<ul sx={styles2.mainMenu}>
								<li sx={styles2.mainMenuItemNavs}>
									<Link to="/modern" activeClassName="active">Katalog</Link>
								</li>
								{/* <li sx={styles2.mainMenuItem}>
									<Link to="/blogs" activeClassName="active">Blog</Link>
								</li> */}
								<li sx={styles2.mainMenuItemNavs}>
									<Link to="/about" activeClassName="active">Hikayemiz</Link>
								</li>
								<li sx={styles2.mainMenuItemNavs}>
									<Link to="/contact" activeClassName="active">Bize Ulaşın</Link>
								</li>
							</ul>
							<Button
								variant="text"
								ariaLabel="Cart"
								onClick={() => setCartVisible(true)}
							>
								<AiOutlineShoppingCart />
								<Text sx={styles.badge}>{products.length}</Text>
							</Button>
						</Box>
					</Fragment>
				)}
			</Box>
			<Drawer
				level={null}
				width="100%"
				// open={sidebarVisibile}
				handler={false}
				placement="left"
				// onClose={() => setSidebarVisible(false)}
			>
				{/* <Sidebar onClose={() => setSidebarVisible(false)} /> */}
			</Drawer>
			<DrawerCart
				open={cartVisible}
				onClick={() => setCartVisible(false)}
				onClose={() => setCartVisible(false)}
				products={products}
			/>
		</Fragment>
	);
};

export default Header;
