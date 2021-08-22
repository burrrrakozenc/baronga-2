import React from 'react';
// import { useRef, useEffect, useDispatch,useState} from 'react'
import RBCarousel from 'react-bootstrap-carousel';
import { Row, Col } from './bootstrap-component.js';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Link } from 'gatsby';
import { Swipeable } from 'react-swipeable'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwipeable } from "react-swipeable";
import Pratama from '../../images/pratama.jpg';
import Fil from '../../images/fil.jpg';
import TasHeykel from '../../images/tasHeykel.jpg';
import Dancer from '../../images/dancer.png';
import './../custom-style/font.css';
import './../custom-style/index-gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactSwipe from "react-swipe";
// import '@fontsource/exo-2/latin-ext.css';

// const styles = { height: 500, width: '100%' };
// const icon_glass = <span className="fa fa-glass" />;
// const icon_music = <span className="fa fa-music" />;

const swipeOptions = {
  startSlide: 0,
  auto: 100000,
  speed: 1000,
  disableScroll: true,
  continuous: true,
  callback() {
    console.log("slide changed");
  },
  transitionEnd() {
    console.log("ended transition");
  }
};

class IndexCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef(); 
    // this.slider = React.createRef();
    this.state = {
      autoplay: false
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

  //   _changeIcon = () => {
  //     let { leftIcon, rightIcon } = this.state;
  //     leftIcon = leftIcon ? undefined : icon_glass;
  //     rightIcon = rightIcon ? undefined : icon_music;
  //     this.setState({ leftIcon, rightIcon });
  //   };
  render() {


    // onSwipedLeft: () => {this.carouselRef.current.next()}
    // const handlers = useSwipeable({
    //   // onSwipedLeft: () => slide(NEXT),
    //   // onSwipedRight: () => slide(PREV),
    //   preventDefaultTouchmoveEvent: true,
    //   trackMouse: true
    // })
    //   const [state, dispatch] = React.useReducer(reducer, initialState);
    // const numItems = React.Children.count(props.children);
    // const slide = dir => {
    //   dispatch({ type: dir, numItems });
    //   setTimeout(() => {
    //     dispatch({ type: "stopSliding" });
    //   }, 50);
    // };



    return (
      <div style={{ paddingBottom: 20 }}>

        <Row>
          <Col span={12} style={{ marginTop: -20 }}>
            {/* <Swipeable
              trackMouse
              preventDefaultTouchmoveEvent
              onSwipedLeft={() => this.onSwiped(LEFT)}
              onSwipedRight={() => this.onSwiped(RIGHT)}

            > */}
     
     {/* <Swiper
spaceBetween={50}
slidesPerView={3}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
> */}
              <RBCarousel
                animation={true}
                // autoplay={this.state.autoplay}
                // slideshowSpeed={2000}
                // defaultActiveIndex={0}
                //   leftIcon={this.state.leftIcon}
                //   rightIcon={this.state.rightIcon}
                onSelect={this._onSelect}
                // ref={this.slider}
                version={4}
                touch={true}
                // ref={this.carouselRef}
                >
                  <ReactSwipe
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
          className="mySwipe"
          swipeOptions={swipeOptions}
        >
                  {/* <Swipeable onSwipedLeft={() => setScrolled(true)} onSwipedRight={() => setScrolled(false)} trackMouse={true}> */}

                <div style={{ height: 500 }}>
                {/* <SwiperSlide> */}
                  {/* <Link to="/"> */}
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={Fil}
                      alt=""
                    />

                    <div
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
                      <div
                        style={{
                          backgroundColor: '#FF5E00',
                          width: '370px',
                          height: '18px',
                          bottom: '-15%',
                          right: '0',
                          position: 'absolute',
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  {/* </Link> */}
                {/* </SwiperSlide> */}
                </div>
                <div style={{ height: 500 }}>
                {/* <SwiperSlide> */}
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={Pratama}
                    alt=""
                  />
                  <div
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
                  </div>
                {/* </SwiperSlide> */}
                </div>
                <div style={{ height: 500 }}>
                {/* <SwiperSlide> */}
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={TasHeykel}
                    alt=""
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
                {/* </SwiperSlide> */}
                </div>
                <div style={{ height: 500 }}>
                {/* <SwiperSlide> */}
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={Dancer}
                    alt=""
                  />
                  <div
                    className="text-right carousel-group-x"
                    style={{
                      position: 'absolute',
                      top: '33%',
                      right: '9%',
                      width: '260px',
                      height: '160px',
                      // borderStyle:'solid',
                      // color: 'white',
                      // backgroundColor:'rgb(204, 41, 0)',
                      // opacity:'0.6',
                      // borderRadius:'13px'
                      // display:'flex',
                      // right: '10px'
                    }}
                  >
                    <p
                      className="carousel-item-x"
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
                        width="300"
                        src="https://www.youtube.com/embed/DPQ7SXMHljQ"
                        frameBorder="0"
                        alt=""
                        allowFullScreen
                        style={{
                          zIndex: '1000',
                        }}
                      />
                      {/* <iframe width="1031" height="580" src="https://www.youtube.com/embed/DPQ7SXMHljQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </p>
                  </div>
                {/* </SwiperSlide> */}
                </div>
                </ReactSwipe>
              </RBCarousel>
                {/* </Swiper> */}
              
            {/* </Swipeable> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default IndexCarousel;
