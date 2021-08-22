import React from 'react';
import { graphql } from 'gatsby';
// import PrimaryLayout from '../components/layout/primary/primary';
// import styles from '../components/custom-style/about.module.css';
// import get from 'lodash/get';
import Img from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { Link } from 'gatsby'
// import Helmet from 'react-helmet'

// const IndexPage = ({ data }) => {
//     const { allContentfulAbout: { nodes: about },
//     } = data

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
    size: '40px',
  },
};

const ProductImage = ({ imageData }) => {
  return (
    //   <div>
    <SRLWrapper options={options}>
      {console.log(imageData)}
      <Img
        key={imageData?.id}
        // 	// key={i}
        fluid={imageData?.localFile?.childImageSharp?.fluid}
        alt={imageData?.title}
      />
    </SRLWrapper>
  );
};

export default ProductImage;
