import React from 'react';
// import { useForm } from '@formspree/react';
// import { Container } from 'theme-ui';
import './askAQuestion.css';
// import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Button = styled.button`
//   min-width: 80px;
//   padding: 10px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 12px;
//   cursor: pointer;
// `;

const ContactForm = () => {
  // const [state, handleSubmit] = useForm('mgervbbe');
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    // <div className="container">
    <section id="contact" className="four">
      <div className="container">
        <header
          style={{
            paddingTop: 20,
          }}
        >
          <h4>Urun hakkinda soru sor</h4>
        </header>

        {/* <p>Elementum sem parturient nulla.</p> */}

        <form method="post" action="#">
          <div className="row">
            <div
              className="col-6 col-12-mobile"
              style={{
                paddingBottom: 30,
              }}
            >
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile" style={{ paddingBottom: 20 }}>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                placeholder="Message"
                style={{
                  height: 200,
                }}
              ></textarea>
            </div>
            <div
              className="col-12"
              style={{
                paddingTop: 20,
              }}
            >
              <input
                type="submit"
                value="Send Message"
                style={{
                  backgroundColor: 'rgb(214,86,34)',
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
