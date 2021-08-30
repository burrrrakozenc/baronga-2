/** @jsx jsx */
import { useState, useContext, useEffect, useRef, Fragment } from 'react';
import { Flex, Box, Text, Button, jsx } from 'theme-ui';
import { IoIosMenu } from 'react-icons/io';
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShopping,
	
} from 'react-icons/ai';
import { FaShoppingCart, FaInstagramSquare, FaFacebookSquare, FaPinterestSquare } from 'react-icons/fa';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import Logo from '../../../logo/logo';
import { Link } from 'gatsby'
// import Search from '../../../search';
import Sidebar from '../sidebar/sidebar';
import DrawerCart from '../../../drawer-cart/drawer-cart';
import { LocalCartContext } from '../../../../provider/local-cart-provider';
import useWindowSize from '../../../../hooks/useWindowSize';
import useOnClickOutside from '../../../../hooks/useOutsideClick';
import styles from './header.style';
import styles2 from '../../primary/header/navbar/navbar.style'

const Header = () => {
	const [sidebarVisibile, setSidebarVisible] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);
	// const [mobileSearch, setMobileSearch] = useState(false);
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
				{/* {mobileSearch ? (
					<Box sx={styles.mobileSearch} ref={mobileSearchRef}>
						<Search />
					</Box>
				) : ( */}
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
							
						</Flex>
						<Flex>
						<Flex sx={styles.menuArea}>
								<Text sx={styles.iconsMain} >
									<Link to="/">
									BARONGA
									</Link>
							</Text>
							</Flex>
						</Flex>
						{/* <Search /> */}

						<Box sx={styles.icons}>
							{/* <Box sx={styles.navBarBox}>
								<Flex sx={styles.navMenuItems}> */}
									<Text 
									sx={styles.navMenuItems} 
									style={{ 
										// paddingLeft: 15 
									}} >
										<Link to="/modern">
										Katalog
										</Link>
									</Text>
									<Text
									sx={styles.navMenuItems} 
									style={{ 
										paddingLeft: 15 
									}} >
										<Link to="/about" >
										Hakkimizda
										</Link>
										
									</Text>
									<Text 
									sx={styles.navMenuItems} 
									style={{ 
										paddingLeft: 15,
										paddingRight:35 
										}} >
											<Link to="/contact">
											Bize Ulasin
											</Link>
									</Text>
								{/* </Flex>
							</Box> */}
							{/* <Button
								sx={styles.searchBtn}
								variant="text"
								ariaLabel="Search"
								onClick={() => setMobileSearch(true)}
							>
								<AiOutlineSearch />
							</Button> */}
							<Button
								variant="text"
								ariaLabel="Cart"
								onClick={() => setCartVisible(true)}
							>
								<FaShoppingCart />
								<Text sx={styles.badge}>{products.length}</Text>
							</Button>
							
							{/* <Button
								variant="text"
								ariaLabel="Cart"
								onClick={() => setCartVisible(true)}
							>
								<FaPinterestSquare style={{color:'red'}}/>
								<FaFacebookSquare style={{color:'blue'}}/>
								<FaInstagramSquare style={{color:'red'}}/>
							</Button> */}
						</Box>
					</Fragment>
				{/* )} */}
			</Box>
			<Drawer
				level={null}
				width="100%"
				open={sidebarVisibile}
				handler={false}
				placement="left"
				onClose={() => setSidebarVisible(false)}
			>
				<Sidebar onClose={() => setSidebarVisible(false)} />
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
