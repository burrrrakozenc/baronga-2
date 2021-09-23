import React, { useState } from 'react';
import styled from 'styled-components';
import '../custom-style/rate-modal.css';

const Button = styled.button`
  min-width: 130px;
  padding: 10px 32px;
  border-radius: 4px;
  border: none;
  background: rgb(214, 86, 34);
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  height: 50px;
`;

const SubscriptionForm = () => {
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
    <div style={{ paddingBottom: '40px' }}>
      <h4 style={{ textAlign: 'center', paddingTop: '15px' }}>
        Yeni gelen ürünler, indirim ve fırsatlardan haberdar olmak için üye olun
      </h4>
      <form
        action={YOUR_FORM_URL}
        method="post"
        onSubmit={handleSubmit}
        className="subs-form-group"
        style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'center',
          margin: '0 auto',

          paddingTop: '10px',
        }}
      >
        <input
          type="text"
          aria-label="İsminiz"
          name="fields[first_name]"
          placeholder="İsminiz"
          className="convert-kit-form-item-2"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '20',
            height: '50px',

            // padding: 5,
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
        <input
          type="email"
          aria-label="E-mail"
          name="email_address"
          className="convert-kit-form-item-3"
          placeholder="E-mail"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '50px',
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
        <Button type="submit">Abone Ol</Button>
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
    </div>
  );
};

export default SubscriptionForm;
