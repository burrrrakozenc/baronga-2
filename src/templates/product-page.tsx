/** @jsx jsx */
import React, {
	useRef,
	useState,
	useEffect,
	useContext,
	useCallback,
} from 'react';
import { Flex, Box, Heading, Text, jsx, Button } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';
import SocialShare from '../components/social-share/social-share';

import { CartContext } from '../provider/cart-provider';
import { LocalCartContext } from '../provider/local-cart-provider';
import useOnClickOutside from '../hooks/useOutsideClick';
import styles from '../components/product-single.style';
import ProductGrid from '../components/product-grid/product-grid';
import AskAQuestion from '../components/subscribe/ask-a-question'
// import { ModalProvider } from 'styled-react-modal'
import ProductImage from '../components/index-gallery/gallery-item'
// import ConvertKit from '../components/subscribe/convert-kit'
import LikeCount from '../components/subscribe/like-count'
import '../components/custom-style/gallery-item.css'
import '../components/custom-style/flexbin.css'
import { FaWhatsapp } from 'react-icons/fa';
import CategoryBlocks from '../components/category-blocks/secondary/secondary'

const ProductPage: React.FC<any> = ({
	data: { shopifyProduct, related, featured, customApi },
	location: { href },
	
	
}) => {
	let product = shopifyProduct;
	product.listView = false;

	const productLike = customApi?.total_subscriptions;
	const categoryProducts = related?.nodes || [];
	const secondCategoryProducts = featured?.nodes || [];
	const {
		title,
		price,
		variants,
		variants: [initialVariant],
		thumbnail,
		prevPrice,
		listView = false,
	} = product;

	const {
		store: { client },
	} = useContext(CartContext);

	const { products, add, update } = useContext(LocalCartContext);
	const counterRef = useRef(null!);
	const [showCounter, setShowCounter] = useState(false);
	useOnClickOutside(counterRef, () => setShowCounter(false));

	const [variant, setVariant] = useState({ ...initialVariant });
	const productVariant = variant;
	const productIndex = products.findIndex(
		(item) => item.variantId === productVariant.shopifyId
	);

	const [status, setStatus] = useState(null);

	const cartProduct = productIndex > -1 ? products[productIndex] : false;
	const cartProductQuantity = cartProduct ? cartProduct.quantity : 0;
	const [quantity, setQuantity] = useState(0);
	const [available, setAvailable] = useState(productVariant.availableForSale);
	const checkAvailability = useCallback(
		(productId) => {
			client.product.fetch(productId).then((fetchedProduct) => {
				// this checks the currently selected variant for availability
				const result = fetchedProduct.variants.filter(
					(variant) => variant.id === productVariant.shopifyId
				);
				if (result && result.length > 0) {
					setAvailable(result[0]?.available);
				}
			});
		},
		[client.product, productVariant.shopifyId, variants]
	);

	const options = {
		buttons: {
			backgroundColor: 'rgba(30,30,36,0.8)',
			iconColor: 'rgba(255, 255, 255, 0.8)',
			iconPadding: '10px',
			showAutoplayButton: false,
			showCloseButton: true,
			showDownloadButton: false,
			showFullscreenButton: false,
			showNextButton: true,
			showPrevButton: true,
			showThumbnailsButton: true,
			size: '40px'
		}
	}

	useEffect(() => {
		setQuantity(cartProductQuantity);
	}, [cartProductQuantity]);

	useEffect(() => {
		checkAvailability(product.shopifyId);
	}, [productVariant, checkAvailability, product.shopifyId]);

	const handleQuantityChange = (quantity: number) => {
		update(productVariant.shopifyId, quantity);
		if (quantity < 1) {
			setShowCounter(false);
		}
	};

	const handleAddToCart = () => {
		if (!available) {
			return false;
		}
		setShowCounter(true);
		if (quantity < 1) {
			const item = {
				title,
				thumbnail: product?.images[0]?.localFile?.childImageSharp?.fluid,
				quantity: 1,
				price: productVariant.priceV2.amount,
				currency: productVariant.priceV2.currencyCode,
				variantId: productVariant.shopifyId,
			};
			add(item);
		}
	};

	const addClass = ['productCard'];
	if (quantity > 0 && showCounter) {
		addClass.push('active');
	}
	if (!available) {
		addClass.push('disabled');
	}

	// const callUsBannerData = prismic?.allHomeminimals?.edges[0]?.node;
	const getPrice = (price: any) =>
		Intl.NumberFormat(undefined, {
			currency: price.currencyCode,
			minimumFractionDigits: 2,
			style: 'currency',
		}).format(parseFloat(price && price.amount ? price.amount : 0));

	const totalImage: number = product.images.length;
	const imageArray = product.images;


	// var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

	// var indexToSplit = imageArray.indexOf(1);
	// var first = imageArray.slice(0, indexToSplit);
	// var second = imageArray.slice(indexToSplit + 1);

	// console.log({first, second});
	// console.log({groups})

	// const window = global.window
	// const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

	// {/* Performs similarly to componentDidMount in classes */ }
	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		const ismobile = window.innerWidth < 1200;
	// 		if (ismobile !== isMobile) setIsMobile(ismobile);
	// 	}, false);
	// }, [isMobile])



	
	// const [isMobile, setIsMobile] = useState(false)
	// const [screenSize, setScreenSize] = useState({
	//   height: 1200,
	//   width: 1200,
	// })
	// const updateScreenSize = () => {
	//   setScreenSize({ width: window.innerWidth, height: window.innerHeight })
	// }
	// useEffect(() => {
	//   if (!isMobile) {
	// 	setIsMobile(true)
	// 	updateScreenSize()
	//   }
	//   window.addEventListener("resize", updateScreenSize)
	//   return () => {
	// 	window.removeEventListener("resize", updateScreenSize)
	//   }
	// }, [screenSize])

	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

	useEffect(() => {
		if (typeof window === 'undefined') return;
	  
		const handleResize = () => setIsMobile(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
		  window.removeEventListener('resize', handleResize)
		};
	  });
	

 	

 	{/* Performs similarly to componentDidMount in classes */ }
 	useEffect(() => {
 		window.addEventListener("resize", () => {
 			const ismobile = window.innerWidth < 1200;
 			if (ismobile !== isMobile) setIsMobile(ismobile);
 		}, false);
 	}, [isMobile])
	 

	return (
		// <SimpleReactLightbox>
		<PrimaryLayout
			bgColor="#ffffff"
			fluid={true}
			homeLink="/minimal"
			pathPrefix="/minimal/collection"
			showNoticeBar={false}
		>
			{/* <WindowProvider> */}
			{/* <ModalProvider> */}
			<Box sx={styles.wrapper}>
				<SEO title={product.title} />
				<Flex sx={styles.product}>
					<Box
						className={product?.images.length > 1 ? 'has-items' : ''}
						sx={styles.image}

					>
						{isMobile ?
 						(
 							<div className={totalImage === 1 ? `flexbin-4 flexbin-margin-4 gallery-wrapper-custom-4` :  `flexbin-2 flexbin-margin-2 gallery-wrapper-custom-2`}>
 							{/* <div className={`flexbin-2 flexbin-margin-2 gallery-wrapper-custom`}> */}
 								{product?.images?.map((item: any) => (
 									<ProductImage key={item.id} imageData={item} />
 								))}
								 {console.log("tadaa here we are")}
 							</div>
 						) : (
 							<div>
								 {console.log("tadaa here we there")}
 								<div className={`flexbin-2 flexbin-margin-2 gallery-wrapper-custom-2`}>
 									{/* <div className={totalImage === 1 ? `flexbin-2 flexbin-margin-2 gallery-wrapper-custom-2` : totalImage === 2 ? `flexbin-2 flexbin-margin-2 gallery-wrapper-custom-2` : `flexbin flexbin-margin gallery-wrapper-custom`}> */}
 									{product?.images.slice(0, 1).map((item: any) => (

 										<ProductImage key={item.id} imageData={item} />
 									))}
 								</div>
 								<div className={`flexbin flexbin-margin gallery-wrapper-custom`}>
 									{product?.images?.slice(1, totalImage).map((item: any) => (
 										<ProductImage key={item.id} imageData={item} />
 									))}
 								</div>
 							</div>
 						)
 						}
					</Box>
					<Box sx={styles.content}>
						<Box sx={styles.header}>
							<Heading as="h1">{product.title}</Heading>
							<Flex>
								<LikeCount shopifyHandle={product?.handle} />
								{/* className={product?.images.length > 1 ? 'has-items' : ''} */}

								<Link to={`/product/${product?.handle}/#ask-a-question`} sx={{
									display: 'block',
									paddingTop: '0.7rem',
									paddingLeft: '1rem'
								}}>
									{/* <CommentIcon /> */}
								Ürün Hakkında Soru Sor

								</Link>
								<a href="http://wa.me/905399537021" target="_blank">
									<FaWhatsapp style={{
										fontSize: "35px",
										color: 'darkgreen',
										fontWeight: "bold",
										paddingTop: '0.7rem',
										paddingLeft: '1rem'
									}} />
								</a>
							</Flex>
							<Flex sx={styles.cartArea}>
								<Text sx={styles.price}>
									{product?.variants[0]?.compareAtPrice ? (<Text sx={styles.price2}>{getPrice(product?.variants[0]?.compareAtPriceV2)}</Text>) : (<p>&nbsp;</p>)}
									{getPrice(product?.variants[0]?.priceV2)}
								</Text>

								<Box
									className={quantity > 0 && showCounter ? 'isActive' : ''}
									sx={styles.cart}
								>
									{available &&
										!quantity && (
											<Button
												className={addClass.join(' ')}
												onClick={() => handleAddToCart()}
												style={{
													backgroundColor: 'rgb(214,86,34)',
												}}
											>
												Sepete Ekle
											</Button>
										)
									}
									{!available &&
										(<Text style={{ color: 'red' }}>Stokta yok </Text>)
									}
									{/* <Button
										className={addClass.join(' ')}
										style={{
											backgroundColor: 'rgb(214,86,34)',
										}}
									><a href="https://wa.me"></a>
										</Button> */}


									{quantity ? (
										<Box ref={counterRef} sx={styles.cartCounter}>
											<Button
												title="Decrement"
												onClick={() => handleQuantityChange(quantity - 1)}
											>
												<IoIosRemove />
											</Button>
											<Box>{quantity}</Box>
											<Button
												title="Increment"
												onClick={() => handleQuantityChange(quantity + 1)}
											>
												<IoIosAdd />
											</Button>
										</Box>
									) : null}
								</Box>

							</Flex>

							<Flex>
							</Flex>
						</Box>

						{/* <Text as="p">{product?.description}</Text> */}
						<Text style={{
							paddingBottom: 50
						}}><div dangerouslySetInnerHTML={{ __html: product?.descriptionHtml, }} /></Text>
						<SocialShare title={product?.title} url={href} />
					</Box>
				</Flex>
				{/* <ProductGrid
					id="featured"
					withLink={withLink}
					gridTitle="Özel Ürünler"
					products={products}
					isCategoryProduct={true}
				/> */}

				{/* <Box style={{padding:'1rem'}}> */}

				<CategoryBlocks
					products={categoryProducts}
					gridTitle="Önerilen Ürünler"
				/>
				<CategoryBlocks
					products={secondCategoryProducts}
					gridTitle="Özel Ürünler"
				/>
				{/* <ProductGrid
					id="relatedProducts"
					gridTitle="Önerilen Ürünler"
					products={categoryProducts}
					withLink={true}
					isCategoryProduct={true}
				/> */}
				{/* </Box> */}
				<div id="ask-a-question">
					<AskAQuestion />
				</div>
			</Box>
			{/* </WindowProvider> */}
			{/* </ModalProvider> */}
		</PrimaryLayout>

	);
};

export const pageQuery = graphql`
	query($handle: String!, $productType: String) {
		shopifyProduct(handle: { eq: $handle }) {
			title
			description
			descriptionHtml
			tags
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
		related: allShopifyProduct(filter: {productType: {eq: $productType}}, limit: 10) {
			nodes {
				id
				title
				handle
				createdAt
				shopifyId
				availableForSale
				variants {
				  id
				  compareAtPrice
				  compareAtPriceV2 {
					  amount
					  currencyCode
					}
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
						  fluid(maxWidth: 910, quality: 65) {
							  ...GatsbyImageSharpFluid_withWebp_tracedSVG
						  }
					  }
				  }
				}
			  }
		}
		featured: allShopifyProduct(filter: { tags: { eq: "featured111" } }, limit: 10) {
			  nodes {
				  id
				  title
				  handle
				  createdAt
				  shopifyId
				  availableForSale
				  variants {
					id
					compareAtPrice
					compareAtPriceV2 {
						amount
						currencyCode
					  }
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
							fluid(maxWidth: 910, quality: 65) {
								...GatsbyImageSharpFluid_withWebp_tracedSVG
							}
						}
					}
				  }
				}
		  }
		  
		customApi(subscriptions: {elemMatch: {subscriber: {first_name: {eq: $handle}}}}) {
			total_subscriptions
		}
	}
`;

export default ProductPage;



// featured: allShopifyProduct(filter: { tags: { eq: "featured111" } }, limit: 10) {
// 	edges {
// 		node {
// 			id
// 			title
// 			handle
// 			createdAt
// 			shopifyId
// 			availableForSale
// 			variants {
// 				id
// 				price
// 				priceV2 {
// 					amount
// 					currencyCode
// 				}
// 				shopifyId
// 				availableForSale
// 			}
// 			images {
// 				id
// 				originalSrc
// 				localFile {
// 					childImageSharp {
// 						fluid {
// 							...GatsbyImageSharpFluid_withWebp_tracedSVG
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }