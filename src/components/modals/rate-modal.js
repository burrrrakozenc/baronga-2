import React, { useState } from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import HeartIcon from '../icon-set/heart-icon';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import '../custom-style/rate-modal.css';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const Button = styled.button`
  min-width: 16rem;
  min-height: 3rem;
  border-radius: 4px;
  border: none;
  background: rgb(214, 86, 34);
  color: white;
  font-size: 12px;
  cursor: pointer;
  height: 50px;
`;

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

function App({ shopifyHandle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const [status, setStatus] = useState(null);
  const YOUR_FORM_ID = '2223377';
  const YOUR_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      const response = await fetch(YOUR_FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });

      const json = await response.json();

      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }

      setStatus('ERROR');
    } catch (err) {
      setStatus('ERROR');
    }
  };

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <div className="App">
      <div>
        <form action={YOUR_FORM_URL} method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            aria-label="Your name"
            name="fields[first_name]"
            value={shopifyHandle}
            placeholder="Your name"
            hidden
            // required
            // aria-hidden="true"
          />
          <span
            style={{
              width: '10px',
            }}
          />
          <input
            type="email"
            aria-label="Your email"
            name="email_address"
            placeholder="Your email address"
            className="convert-kit-form-item"
            value="baronga@baronga.com"
            required
            hidden
          />

          <button onClick={toggleModal}>
            <FaHeart style={{ color: 'red', fontSize: '30px' }} />
          </button>
          <div
            style={{
              display: 'flex',
            }}
          >
            {status === 'SUCCESS' && (
              <p
                style={{
                  position: 'relative',
                  width: '10vw',
                  margin: '0 auto',
                }}
              >
                Dogrulama maili adresinize gonderildi.
              </p>
            )}
            {status === 'ERROR' && <p>Bir hata olustu.</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
