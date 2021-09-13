/** @jsx jsx */
import React, { Fragment } from 'react';
import { Flex, Box, Grid, Heading, Text, jsx, Button } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import Carousel from '../../carousel/carousel';
import CategoryBlock from '../../category-card/secondary/secondary';
import styles from './secondary.style';
import ProductCardWithLink from '../../product-card/with-link';
import styles2 from '../../product-grid/product-grid.style'

type PropsType = {
	id?: string;
	close?: Function;
	isCategoryProduct?: boolean;
	// withLink?: boolean;
	gridTitle?: string;
	products: any;
};

const CategoryBlocks: React.FC<PropsType> = ({
	id,
	close,
	gridTitle,
	products,
	// withLink = true,
	isCategoryProduct = true,
}) => {
	const getPrice = (price: any) =>
		Intl.NumberFormat(undefined, {
			currency: price.currencyCode,
			minimumFractionDigits: 2,
			style: 'currency',
		}).format(parseFloat(price && price.amount ? price.amount : 0));
	const responsive = {
		xlg: {
			breakpoint: { max: 100000, min: 1440 },
			items: 6,
		},
		lg: {
			breakpoint: { max: 1439, min: 1200 },
			items: 5,
		},
		md: {
			breakpoint: { max: 1199, min: 768 },
			items: 3,
		},
		sm: {
			breakpoint: { max: 767, min: 0 },
			items: 2,
		},
	};
	console.log(products)
	return (
		<Box sx={styles.wrapper}>
			<Flex sx={styles2.header}>
				{gridTitle && <Heading as="h3">{gridTitle}</Heading>}
				{/* {close && (
					<Button variant="text" onClick={close}>
						Clear
					</Button>
				)} */}
			</Flex>
			{/* <Box sx={styles.header}>
				<Heading as="h2">{RichText.asText(title)}</Heading>
				<Text as="p">{RichText.asText(shortIntro)}</Text>
			</Box> */}
			
			<Carousel ssr={true} responsive={responsive} gutter="10px">

				{/* <Grid sx={styles2.productGrid}> */}
					{products.map((product: any) => {
						const {
							id,
							title,
							handle,
							shopifyId,
							variants,
							availableForSale,
							images: [firstImage],
							variants: [firstVariant],
						} = isCategoryProduct ? product : product.node;
						return (
							<Fragment key={id}>

								<CategoryBlock
									title={title}
									path={`/product/${handle}`}
									shopifyId={shopifyId}
									availableForSale={availableForSale}
									price={getPrice(firstVariant?.priceV2)}
									thumbnail={firstImage?.localFile?.childImageSharp?.fluid}
									variants={variants}
								/>

							</Fragment>
						);
					}
					)}
				{/* </Grid> */}
			</Carousel>
		</Box>
	);
};

export default CategoryBlocks;



// {products.map((product: any) => {
// 	const {
// 		id,
// 		title,
// 		handle,
// 		shopifyId,
// 		variants,
// 		availableForSale,
// 		images: [firstImage],
// 		variants: [firstVariant],
// 	} = isCategoryProduct ? product : product.node;
// 	{console.log(product)}
// 	// <CategoryBlock
// 	// 	key={item.category_slug}
// 	// 	path={`/minimal/collection/${item.category_slug}`}
// 	// 	thumbnail={item.imageSharp.childImageSharp.fluid}
// 	// 	title={item.category_title}
// 	// />
// 	<CategoryBlock
// 						title={title}
// 						path={`/product/${handle}`}
// 						shopifyId={shopifyId}
// 						availableForSale={availableForSale}
// 						price={getPrice(firstVariant?.priceV2)}
// 						thumbnail={firstImage?.localFile?.childImageSharp?.fluid}
// 						variants={variants}
// 					/>
// })}