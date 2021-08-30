/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
// import { RichText } from 'prismic-reactjs';
import { Box, Text, jsx } from 'theme-ui';
import Container from '../../../container/container';
import SocialLinks from '../../../social-links/social-links';
import styles from './footer.styles';
import Logo2 from '../../../../images/logo2b.png'
import './footer.css'
import {FaRegFileAlt} from 'react-icons/fa';

const footerStaticQuery = graphql`
	query {
		prismic {
			allCommons {
				edges {
					node {
						copyright_text
						social_links {
							social_link {
								... on PRISMIC__ExternalLink {
									url
								}
							}
							social_type
						}
					}
				}
			}
		}
	}
`;
const getSocialData = (links) => {
	const data = [];
	links.forEach((link) => {
		data.push({ type: link.social_type, link: link.social_link.url });
	});
	return data;
};

const Footer: React.FC<{ fluid?: boolean }> = ({ fluid }) => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${footerStaticQuery}`}
		render={(data) => {
			const footerData = get(data, 'prismic.allCommons.edges[0].node');
			const socialData = getSocialData(footerData.social_links);
			return (
				<div as="footer" sx={styles.footer}>
					<Container fluid={fluid}>
						<footer id="footer">
							<section>
								<div>
									{/* <Logo2 sx={{
										width: 400,
										height: 300
									}}/> */}
									{/* <a href="https://ibb.co/tZhcJt7"><img src="" alt="Baronga-Typography" border="0/"></a> */}
									<img src={Logo2} width="300" height="250" />
									{/* <img src="" /> */}
								</div>
								{/* <h2>Aliquam sed mauris</h2>
								<p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
								<ul className="actions">
									<li><a href="generic.html" className="button">Learn More</a></li>
								</ul> */}
							</section>
							<section>
								{/* <h2>BARONGA</h2>
								<h5>Authentic Handcrafts</h5> */}
								<dl className="alt">
									{/* <dt>Adres</dt>
										<dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd> */}
									<dt>&nbsp;</dt>
									<dt>Telefon</dt>
									<dd>(0) 539 953 70 21</dd>
									<dt>Email</dt>
									<dd><a href="#">info@baronga.com</a></dd>
									<dt>&nbsp;</dt>
									<dt><FaRegFileAlt/>&nbsp;Sozlesme</dt>
									<dt>&nbsp;</dt>
									<dt><FaRegFileAlt/>&nbsp;Sozlesme</dt>
									<dt>&nbsp;</dt>
									<dt><FaRegFileAlt/>&nbsp;Sozlesme</dt>
								</dl>
								
							</section>
							<SocialLinks items={socialData} />
						</footer>
						{/* <Text className="copyright" sx={styles.copyright}>
							{RichText.render(footerData.copyright_text)}
						</Text> */}

					</Container>
				</div>
			);
		}}
	/>
);

export default Footer;
