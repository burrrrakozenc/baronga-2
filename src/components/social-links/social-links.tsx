/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import SocialLink from './social-link';
import styles from './social-links.style';
import { FaShoppingCart, FaInstagramSquare, FaFacebookSquare, FaPinterestSquare } from 'react-icons/fa';

type PropsType = {
	items: {
		type: string;
		link: string;
	}[];
};

const SocialLinks: React.FC<PropsType> = ({ items }) => {
	return (
		<Box className="socialLinks" sx={styles.socialLinks}>
											<FaPinterestSquare style={{color:'red', fontSize:'30px',paddingLeft:'10px'}}/>
								<FaFacebookSquare style={{color:'blue', fontSize:'30px',paddingLeft:'10px'}}/>
								<FaInstagramSquare style={{color:'red', fontSize:'30px'}}/>
			{/* {items && items.map((item) => <SocialLink key={item.type} item={item} />)} */}
		</Box>
	);
};

export default SocialLinks;
