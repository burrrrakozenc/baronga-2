import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';
import CategoryBanner from '../components/category-banner/category-banner';
import ProductGrid from '../components/product-grid/product-grid';
import BannerImg from '../images/indirimdekiler-2.jpg'

const CategoryPage = ({ data }: any) => {
	const { nodes } = data.allShopifyProduct;
	// const productsType = pageContext?.handle;
	// const title = data.title;
	// const title = productsType.charAt(0).toUpperCase() + productsType.slice(1);
    const title = "İndirimdekiler"
	return (
		<PrimaryLayout
			fluid={true}
			homeLink="/minimal"
			pathPrefix="/minimal/collection"
			showNoticeBar={false}
		>
			{/* <SEO title={title} /> */}
			<CategoryBanner title={title} bgImage={BannerImg} />
			<ProductGrid
				id="category"
				products={nodes}
				withLink={true}
				isCategoryProduct={true}
			/>
		</PrimaryLayout>
	);
};

export const query = graphql`
	query {
		allShopifyProduct(filter: {variants: {elemMatch: {compareAtPriceV2: {amount: {ne: null}}}}}) {
            
                        nodes {
                            id
                            title
                            handle
                            createdAt
                            shopifyId
                            availableForSale
                            variants {
                                id
                                price
                                compareAtPrice
                                compareAtPriceV2 {
                                    amount
                                    currencyCode
                                }
                                priceV2 {
                                    amount
                                    currencyCode
                                }
                                shopifyId
                                availableForSale
                            }
                            images {
                                id
						originalSrc
						localFile {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
                            }
                        }
                    }
          
	}
`;

export default CategoryPage;
