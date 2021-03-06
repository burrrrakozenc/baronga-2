import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ProductGrid from '../product-grid/product-grid';

const featuredStaticQuery = graphql`
	query {
		allShopifyProduct(filter: {variants: {elemMatch: {compareAtPriceV2: {amount: {ne: null}}}}}, limit: 10) {
      edges {
        node {
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
  }
`;

const FeaturedProducts2: React.FC<{ withLink?: boolean }> = ({
	withLink = false,
}) => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${featuredStaticQuery}`}
		render={({ allShopifyProduct }) => {
			const products = allShopifyProduct?.edges;
			return (
				<ProductGrid
					id="feature"
					withLink={withLink}
					gridTitle="─░ndirimdekiler"
					products={products}
				/>
			);
		}}
	/>
);

export default FeaturedProducts2;
