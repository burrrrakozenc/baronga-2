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
// import CallusBanner from '../components/call-us-banner/call-us-banner';
import { CartContext } from '../provider/cart-provider';
import { LocalCartContext } from '../provider/local-cart-provider';
import useOnClickOutside from '../hooks/useOutsideClick';
import styles from '../components/product-single.style';
import ProductGrid from '../components/product-grid/product-grid';
import HeartRater from '../components/rater/rater'
import Modal from '../components/modals/rate-modal'
import AskAQuestion from '../components/subscribe/ask-a-question'
import { ModalProvider } from 'styled-react-modal'
import { SRLWrapper, SimpleReactLightbox } from 'simple-react-lightbox'
import ProductImage from '../components/index-gallery/gallery-item'
import ConvertKit from '../components/subscribe/convert-kit'
import LikeCount from '../components/subscribe/like-count'


const ProductPage: React.FC<any> = ({
	data: { shopifyProduct, shopifyCollection, prismic, customApi },
	location: { href },
}) => {
	let product = shopifyProduct;
	product.listView = false;

	const productLike = customApi?.total_subscriptions;
	const categoryProducts = shopifyCollection?.products || [];
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

	return (
		// <SimpleReactLightbox>
		<PrimaryLayout
			bgColor="#ffffff"
			fluid={true}
			homeLink="/minimal"
			pathPrefix="/minimal/collection"
			showNoticeBar={false}
		>
			<ModalProvider>
				<Box sx={styles.wrapper}>
					<SEO title={product.title} />
					<Flex sx={styles.product}>
						<Box
							className={product?.images.length > 1 ? 'has-items' : ''}
							sx={styles.image}
						>
							{/* <div>{product.images}</div> */}
							{/* <SRLWrapper options={options}> */}
							{product?.images.map((item: any) => (

								<ProductImage imageData={item} />
								// {console.log(item)}
								// <Img
								// 	key={item?.id}
								// 	// key={i}
								// 	fluid={item?.localFile?.childImageSharp?.fluid}
								// 	alt={product?.title}
								// />
							))}
							{/* </SRLWrapper> */}
						</Box>
						<Box sx={styles.content}>
							<Box sx={styles.header}>
								<Heading as="h1">{product.title}</Heading>
								<Flex>
									{/* <HeartIcon /> */}
									{/* <HeartRater /> */}
									{/* <ConvertKit shopifyId={product?.handle} /> */}

									<LikeCount shopifyHandle={product?.handle} />
									{/* className={product?.images.length > 1 ? 'has-items' : ''} */}
							&nbsp;&nbsp;|&nbsp;
							<Link to={`/product/${product?.handle}/#ask-a-question`} sx={{
										display: 'block',
										paddingTop:'0.3rem'
									}}>
										{/* <CommentIcon /> */}
								Ürün Hakkında Soru Sor

								</Link>
								</Flex>
								<Flex sx={styles.cartArea}>
									<Text sx={styles.price}>
										{getPrice(product?.variants[0]?.priceV2)}
									</Text>
									<Box
										className={quantity > 0 && showCounter ? 'isActive' : ''}
										sx={styles.cart}
									>
										{!quantity && (
											<Button
												className={addClass.join(' ')}
												onClick={() => handleAddToCart()}
												style={{
													backgroundColor: 'rgb(214,86,34)',
												}}
											>
												Sepete Ekle
											</Button>
										)}
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
									{/* <HeartIcon /> */}
									{/* <HeartRater /> */}
									{/* <Modal />
							&nbsp;&nbsp;|&nbsp;
							<Link to={`/product/${product?.handle}/#ask-a-question`} sx={{
										display: 'block'
									}}>
										<CommentIcon />
								Ürün Hakkında Soru Sor

								</Link> */}
								</Flex>
							</Box>

							{/* <Text as="p">{product?.description}</Text> */}
							<Text style={{
								paddingBottom: 50
							}}><div dangerouslySetInnerHTML={{ __html: product?.descriptionHtml, }} /></Text>
							{/* <Text as="p">{product?.description}</Text> */}
							{/* {product?.tags && (
							<Box sx={styles.tagArea}>
								<Text sx={styles.tagTitle}>Tag:</Text>
								<Box>
									{product?.tags.map((item: string) => (
										<Box key={item} as="span">
											{item}
										</Box>
									))}
								</Box>
							</Box>
						)} */}
							<SocialShare title={product?.title} url={href} />
						</Box>
					</Flex>
					<ProductGrid
						id="relatedProducts"
						gridTitle="Related Products"
						products={categoryProducts}
						withLink={true}
						isCategoryProduct={true}
					/>
					{/* <CallusBanner
					scrollTo="#relatedProducts"
					callUsBanner={callUsBannerData?.call_us_banner}
					callUsTitle={callUsBannerData?.call_us_banner_content}
					callUsButtonText={callUsBannerData?.call_us_button_text}
				/> */}
					<div id="ask-a-question">
						<AskAQuestion />
					</div>
				</Box>
			</ModalProvider>
		</PrimaryLayout>
		// </SimpleReactLightbox>
	);
};

export const pageQuery = graphql`
	query($handle: String!) {
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
		shopifyCollection(products: { elemMatch: { handle: { eq: $handle } } }) {
			products {
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
		customApi(subscriptions: {elemMatch: {subscriber: {first_name: {eq: $handle}}}}) {
			total_subscriptions
		}
	}
`;

export default ProductPage;
