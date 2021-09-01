import React from 'react';
import { graphql } from 'gatsby';
import PrimaryLayout from '../components/layout/primary/primary';
import styles from '../components/custom-style/about.module.css';
import get from 'lodash/get';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Pratama from '../images/pratamaResized.jpg'
// import { Link } from 'gatsby'
// import Helmet from 'react-helmet'

// const IndexPage = ({ data }) => {
//     const { allContentfulAbout: { nodes: about },
//     } = data
class Contact extends React.Component {
  render() {
    const about = get(this, 'props.data.allContentfulAbout.edges');

    return (
      <PrimaryLayout>
        {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Neferka Design</title>
                <link rel="canonical" href="http://neferka.design/" />
            </Helmet> */}
        <div className={styles.indexWrapper}>
        
          {about.map(({ node }) => {
            return (
              <section className={styles.page}>
                <div>
                  {documentToReactComponents(JSON.parse(node.content.content))}
                </div>
                <div className={styles.container}>
                {node.aboutImages.map((it) => {
                  return (
                    <article>
                      {it.title}
                      <Image
                        fluid={it.fluid}
                        alt=""
                        className={styles.indeximages}
                      />
                    </article>
                  );
                })}
                </div>
                <div>
                  {documentToReactComponents(
                    JSON.parse(node.content2.content2)
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </PrimaryLayout>
    );
  }
}

export const query = graphql`
  {
    allContentfulAbout {
      edges {
        node {
          aboutImages {
            fluid {
              src
            }
            id
          }
          id
          slug
          title
          content {
            content
          }
          content2 {
            content2
          }
        }
      }
    }
  }
`;

export default Contact;

// allContentfulHome(sort: { fields: orderNumber, order: ASC }){
//     nodes {
//       orderNumber
//       slug
//       id
//       category
//       categoryImage {
//         fluid {
//           src
//         }
//       }
//       desc
//     }
//   }
