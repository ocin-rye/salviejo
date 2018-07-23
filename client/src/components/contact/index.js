import React, { Component } from 'react';
import styles from './index.scss';

import MailingList from './mailingList';
const mailingImage =
  'https://res.cloudinary.com/salviejo/image/upload/v1524575155/shop/contact/contact.jpg';

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact - Salviejo';
  }

  render() {
    return (
      <div className={styles.contact}>
        <p className={styles.title}>contact</p>
        <div className={styles.content}>
          <div className={styles.info}>
            <p>all inquiries</p>
            <p>+1 914 434 2722</p>
            <p>kristine@kristinesalviejo.com</p>
            <p>instagram</p>
          </div>
          <div className={styles.mailingImageContainer}>
            <img src={mailingImage} className={styles.mailingImage} />
          </div>
          <div className={styles.mailingList}>
            <MailingList />
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
