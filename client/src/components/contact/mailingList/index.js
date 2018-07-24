import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// import styles from './index.scss';

const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div
      style={{
        background: 'none',
        borderRadius: 2,
        padding: 0,
        display: 'inline-block',
      }}
    >
      <div>mailing list</div>
      {status === 'sending' && <div style={{ color: 'white' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: '1.4rem', padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="your name"
      />
      <br />
      <input
        style={{ fontSize: '1.4rem', padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="your email"
      />
      <br />
      <button
        style={{
          fontSize: '1.4rem',
          padding: 5,
          color: '#c2a1c3',
          background: '#ffffff',
        }}
        onClick={submit}
      >
        submit
      </button>
    </div>
  );
};

class MailingList extends Component {
  componentDidMount() {
    document.title = 'Contact - Salviejo';
  }

  render() {
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    );
  }
}
export default MailingList;
