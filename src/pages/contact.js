import React from 'react';
import PrimaryLayout from '../components/layout/primary/primary';
import styles from '../components/custom-style/about.module.css';
import 'bootstrap/dist/css/bootstrap.min.css/';
import '../components/custom-style/contact.css';
import { FaWhatsapp } from 'react-icons/fa';
// import { Link } from 'gatsby'
// import Helmet from 'react-helmet'

// const IndexPage = ({ data }) => {
//     const { allContentfulAbout: { nodes: about },
//     } = data
class Contact extends React.Component {
  render() {
    return (
      <PrimaryLayout>
        {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Neferka Design</title>
                <link rel="canonical" href="http://neferka.design/" />
            </Helmet> */}
        <div className={styles.indexWrapper}>
          <h2>
            Bizimle iletişime geçin.&nbsp;&nbsp;&nbsp;{' '}
            <a
              href="http://wa.me/905399537021"
              target="_blank"
              style={{ color: 'darkgreen' }}
            >
              <FaWhatsapp
                style={{
                  fontSize: '35px',
                  color: 'darkgreen',
                  fontWeight: 'bold',
                }}
              />
            </a>
          </h2>

          <p>Toplu alım, istek ve şikayetleriniz için bize ulaşın.</p>
          <div class="row">
            <div class="col-12">
              <form method="post" action="#">
                <div class="row gtr-uniform gtr-50">
                  <div
                    style={{ paddingBottom: 20, textDecoration: 'none' }}
                    class="col-6 col-12-xsmall"
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="İsim"
                    />
                  </div>
                  <div
                    style={{ paddingBottom: 20 }}
                    class="col-6 col-12-xsmall"
                  >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div style={{ paddingBottom: 20 }} class="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Mesaj"
                      rows="12"
                    ></textarea>
                  </div>
                </div>
              </form>
              <ul class="actions" style={{ listStyle: 'none' }}>
                <li>
                  <input
                    type="submit"
                    placeholder="Gönder"
                    style={{
                      backgroundColor: 'rgb(214,86,34)',
                      width: '12rem',
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PrimaryLayout>
    );
  }
}

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
