import React from 'react';
import { graphql } from 'gatsby';
// import PrimaryLayout from '../components/layout/primary/primary';
// import styles from '../components/custom-style/about.module.css';
// import get from 'lodash/get';
import Img from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';
// import JustifiedGrid from 'react-justified-grid';

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
    // <SimpleReactLightbox>
    <SRLWrapper options={options}>
      {/* {console.log(imageData)} */}
      {/* {imageData.map( (it)  => ( */}
      <img
        key={imageData.id}
        // 	// key={i}
        // className="gallery-wrapper-custom-xxx"
        src={imageData.localFile.childImageSharp.fluid.src}
        alt=""
      />
    </SRLWrapper>
    // </SimpleReactLightbox>
  );
};

// class ProductImage extends Component {
//   render () {
//     return (
//       <JustifiedGrid images={images} rows={3} maxRowHeight={64}>
//         {processedImages => {
//           return (
//             <Fragement>
//               {processedImages.map(image => {
//                 const { src, width, height, left, top, originalData } = image;
//                 return (
//                   <Link to={originalData.linkUrl}>
//                     <img src={src} width={width} height={height} />
//                   </Link>
//                 );
//               })}
//             </Fragement>
//           );
//         }}
//       </JustifiedGrid>
//     )
//   }
// }

export default ProductImage;
