import React, { useState } from 'react';
import styled from 'styled-components';
import '../custom-style/convert-kit.css';

const Button = styled.button`
  min-width: 80px;
  padding: 10px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  height: 50px;
`;

const SubscriptionForm = ({ shopifyId }) => {
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

  return (
    <>
      <h4 style={{ textAlign: 'center', paddingTop: '15px' }}>
        Aylik bilgilendirmeye abone olmak icin bilgileri doldurun.
      </h4>
      <form
        className="convert-kit-form"
        action={YOUR_FORM_URL}
        method="post"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '0 auto',
          height: '80px',
          paddingTop: '10px',
        }}
      >
        <input
          type="text"
          aria-label="Your name"
          name="fields[first_name]"
          value={shopifyId}
          placeholder="Your name"
          className="convert-kit-form-item"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: '52px',
            width: '20vw',
            padding: 5,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
            color: 'green',
          }}
          // required
          hidden
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
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: '30px',
            width: '40vw',
            padding: 25,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
            color: 'green',
          }}
          required
        />
        <span
          style={{
            width: '10px',
          }}
        />
        <Button type="submit">Subscribe</Button>
        <div
          style={{
            display: 'flex',
          }}
        >
          {status === 'SUCCESS' && (
            <p
              style={{ position: 'relative', width: '10vw', margin: '0 auto' }}
            >
              Welcome!
            </p>
          )}
          {status === 'ERROR' && <p>Oops, try again.</p>}
        </div>
      </form>
    </>
  );
};

export default SubscriptionForm;
