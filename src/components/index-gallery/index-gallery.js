import React, { Component } from 'react';
// import { useRef, useEffect, useDispatch,useState} from 'react'
// import RBCarousel from 'react-bootstrap-carousel';
// import { Row, Col } from './bootstrap-component.js';
// import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Link } from 'gatsby';
// import {Img} from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useSwipeable, SwipeEventData } from 'react-swipeable';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swipeable } from "react-swipeable";
import { Carousel } from 'react-responsive-carousel';
import Pratama from '../../images/pratama.jpg';
import Fil from '../../images/fil.jpg';
import TasHeykel from '../../images/tasHeykel.jpg';
import Dancer from '../../images/finalDancer.png';
import './../custom-style/font.css';
import './../custom-style/index-gallery.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Swipe from 'react-easy-swipe'
// import ReactSwipe from "react-swipe";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import '@fontsource/exo-2/latin-ext.css';

// const styles = { height: 500, width: '100%' };
// const icon_glass = <span className="fa fa-glass" />;
// const icon_music = <span className="fa fa-music" />;

class IndexCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    // this.slider = React.createRef();
    this.state = {
      autoplay: false,
    };
    // this.carouselRef= React.createRef();
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };

  render() {
    return (
      <div
        className="carousel-custom"
        style={{
          maxHeight: '50rem',
        }}
      >
        <Carousel
          className="carousel-wrapper"
          // dynamicHeight
          showStatus={false}
          showThumbs={false}
          // autoPlay
          infiniteLoop
        >
          <div>
            <img
              // style={{
              //   width: '100%',
              //   height: '100%',
              //   // objectFit: 'cover',
              // }}
              src={Fil}
              alt=""
            />

            <section
              className="text-right carousel-group-x"
              style={{
                position: 'absolute',
                top: '40%',
                right: '0%',
                width: '390px',
                height: '120px',
                // borderStyle: 'solid',
                color: 'white',
                // backgroundColor: 'rgb(255, 184, 77)',
                backgroundColor: 'black',
                opacity: '0.5',
                // borderRadius: '13px',
                // display:'flex',
                // right: '10px'
              }}
            >
              <p
                className="carousel-item-x"
                style={{
                  // fontSize: '23px',
                  float: 'right',
                  // fontWeight:'bolder',
                  textAlign: 'center',
                  fontFamily: 'Exo 2',
                  paddingTop: '1.75rem',
                  fontWeight: 500,
                  // color:'rgb(255, 163, 26)',
                  paddingLeft: 5,

                  paddingRight: 45,
                }}
              >
                BALİ'Lİ USTA ELLERDEN ÇIKAN EŞSİZ HEYKELLERİ KEŞFEDİN
              </p>
              <p
                style={{
                  backgroundColor: '#FF5E00',
                  width: '370px',
                  height: '18px',
                  bottom: '-29%',
                  right: '0',
                  position: 'absolute',
                  opacity: 0.7,
                }}
              />
            </section>
          </div>

          <div>
            <section>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={Pratama}
                alt=""
              />
              <p
                className="text-right carousel-group-x"
                style={{
                  position: 'absolute',
                  top: '36%',
                  right: '0%',
                  width: '360px',
                  height: '140px',
                  // borderStyle: 'solid',
                  color: 'white',
                  backgroundColor: 'black',
                  // backgroundColor: 'rgb(0, 102, 0)',
                  opacity: '0.4',
                  // borderRadius: '13px',
                  // display:'flex',
                  // right: '10px'
                }}
              >
                <p
                  className="carousel-item-x"
                  style={{
                    // fontSize: '22px',
                    float: 'right',
                    paddingTop: '1.3rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    fontFamily: 'Exo 2',
                    // paddingTop:'0.5rem',
                    // color:'rgb(255, 163, 26)',
                    opacity: 1,
                    paddingLeft: 5,
                    paddingRight: 35,
                  }}
                >
                  NESİLDEN NESİLE AKTARILAN KADİM EL SANATLARINI DENEYİMLEYİN
                </p>
                <div
                  style={{
                    backgroundColor: '#FF5E00',
                    width: '340px',
                    height: '14px',
                    bottom: '-9%',
                    right: '0',
                    position: 'absolute',
                    opacity: 0.5,
                  }}
                />
              </p>
            </section>
          </div>
          <div>
            <img
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={TasHeykel}
              alt="2"
            />
            <div
              className="text-right carousel-group-x"
              style={{
                position: 'absolute',
                top: '35%',
                right: '0%',
                width: '360px',
                height: '140px',
                // borderStyle: 'solid',
                color: 'white',
                backgroundColor: 'black',
                opacity: '0.6',
                // borderRadius: '13px',
                // display:'flex',
                // right: '10px'
              }}
            >
              <p
                className="carousel-item-x"
                style={{
                  // fontSize: '23px',
                  float: 'right',
                  textTransform: 'uppercase',
                  // fontWeight:'bolder',
                  textAlign: 'center',
                  fontFamily: 'Exo 2, sans-serif',
                  // paddingTop:'0.5rem',
                  // color:'rgb(255, 163, 26)',

                  paddingLeft: 5,
                  paddingRight: 35,
                  paddingTop: 17,
                }}
              >
                SPİRİTÜEL&DEKORATİF ÜRÜNLERİMİZLE EVİNİZİN POZİTİF ENERJİSİN
                ARTIRIN
              </p>
              <div
                style={{
                  backgroundColor: '#FF5E00',
                  width: '340px',
                  height: '18px',
                  bottom: '-13%',
                  right: '0',
                  position: 'absolute',
                  opacity: 0.5,
                }}
              />
            </div>
          </div>

          <div>
            <img
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={Dancer}
              alt="3"
            />

            <section className="text-right carousel-iframe-x">
              <p
                className="carousel-group-iframe-x"
                style={{
                  // fontSize: '17px',
                  float: 'right',
                  textTransform: 'uppercase',
                  // fontWeight:'bolder',
                  textAlign: 'center',
                  fontFamily: 'Exo 2',
                  // paddingTop:'0.5rem',
                  // color:'rgb(255, 163, 26)',
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                <iframe
                  // style={{ width: 400, marginTop: 100, marginRight: 50 }}
                  height="180"
                  width="700"
                  src="https://www.youtube.com/embed/DPQ7SXMHljQ"
                  frameBorder="0"
                  alt=""
                  allowFullScreen
                  style={{
                    zIndex: '1000',
                    width: '320px',
                  }}
                />
              </p>
            </section>
          </div>

          {/* </Swiper> */}
        </Carousel>
      </div>
    );
  }
}

export default IndexCarousel;
