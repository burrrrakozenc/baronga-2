import React from "react";
import { graphql } from "gatsby";
import ProductGrid from "../components/product-grid/product-grid";

const ProductLikeCount = ({ data }: any) => {
	// console.log(data.allShopifyCollection.edges.node)
    const products = data.allShopifyProduct.edges.node;
	
	return (
		<div>
            {/* <ProductGrid id="category" products={products} isCategoryProduct={true} /> */}
        </div>
	);
};

export const query = graphql`
	query($productType: String!) {
        allShopifyProduct(limit: 10, filter: {productType: {eq: $productType}}) {
			edges{
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
							fluid(maxWidth: 910, quality: 100) {
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

export default ProductLikeCount;
