import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';
// import HomeBanner from '../components/home-banner/home-banner';
import CategoryBlocks from '../components/category-blocks/primary/primary';
// import LatestProducts from '../components/latest-products/latest-products-home';
// import HowItWorks from '../components/how-it-works/primary/primary';
import FeaturedProducts1 from '../components/featured-products/featured-products-home';
import FeaturedProducts2 from '../components/featured-products/featured-products-2';
// import TrendingProducts from '../components/trending-products/trending-products-home';
import ConvertKit from '../components/subscribe/subscription-new'
// import CallusBanner from '../components/call-us-banner/call-us-banner';
import IndexGallery from '../components/index-gallery/index-gallery'

const indexPageStaticQuery = graphql`
	query {
		prismic {
			allHomes {
				edges {
					node {
						
						category_block {
							category_slug
							category_title
							image
							imageSharp {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
						
						trending_block_title
						view_more_text
						how_it_works_group {
							title
							description
							image
						}
					}
				}
			}
		}
	}
`;

const IndexPage: React.FC<{}> = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${indexPageStaticQuery}`}
		render={(data) => {
			const node = get(data, 'prismic.allHomes.edges[0].node');
			// const banner = node.banner.url;
			// const bannerTitle = node.banner_title;
			// const bannerSubTitle = node.banner_subtitle;
			// const bannerButtonText = node.banner_button_text;
			const categoryBlock = node.category_block;
			// const callUsBanner = node.call_us_banner;
			// const callUsTitle = node.call_us_title;
			// const callUsButtonText = node.call_us_button_text;
			// const howItWorksTitle = node.how_it_works_title;
			// const howItWorksSubtitle = node.how_it_works_subtitle;
			// const howItWorksGroup = node.how_it_works_group;

			return (
				<PrimaryLayout>
					<SEO title="Home" />
					<IndexGallery/>
					<CategoryBlocks categoryBlock={categoryBlock} withLink={true} />
					<FeaturedProducts1 withLink={true}/>
					<FeaturedProducts2 withLink={true}/>
					<ConvertKit/>
				</PrimaryLayout>
			);
		}}
	/>
);

export default IndexPage;
