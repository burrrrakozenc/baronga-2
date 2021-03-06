/** @jsx jsx */
import { Box, Button, jsx } from 'theme-ui';
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RichText } from 'prismic-reactjs';
import { ArrowRight } from '../icons';
import Carousel from '../carousel/carousel';
import AdBlock from '../ad-block/ad-block';
import styles from './ad-banner.style';

type Props = {
	data: any;
	scrollTo?: string;
	scrollOffset?: number;
};

const AdBanner: React.FC<Props> = ({ data, scrollTo, scrollOffset }) => {
	const responsive = {
		ipad: {
			breakpoint: { max: 100000, min: 651 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 650, min: 0 },
			items: 1,
		},
	};

	return (
		<Box className="picksyAdBanner" sx={styles.wrapper}>
			<Carousel ssr={true} responsive={responsive} gutter="10px">
				{data.map((item: any, index: number) => (
					
					<Link to={`${RichText.asText(item?.short_description)}`}>
					<AdBlock
						style={{textDecoration:'none'}}
						key={`adblock-key${index}`}
						tag={item.badge_title}
						tagBgColor={item.badge_color}
						bannerImage={item.block_image?.url}
						title={item.title}
						shortDescription={item.short_description}
						btn={
							// <AnchorLink
							// 	href={scrollTo}
							// 	style={{ textDecoration: 'none' }}
							// 	offset={scrollOffset}
							// >
							<Link to={`${item.button_title}`}>
								<Button variant="white" style={{fontFamily:'Exo 2'}}>
									{RichText.asText(item.badge_title)} <ArrowRight />
								</Button>
							</Link>
							// </AnchorLink>
						}
					/>
					</Link>
				))}
			</Carousel>
		</Box>
	);
};

export default AdBanner;
