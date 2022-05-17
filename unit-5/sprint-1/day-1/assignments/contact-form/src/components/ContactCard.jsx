import React from 'react'
import styles from './ContactCard.module.css'

export const ContactCard = (props) => {
    const {imgurl, name, email, id, phone} = props;
  return (
    <div>
      <div className={styles.container}>
          <img className={styles.pp} src={imgurl} alt="" />
          <div className={styles.data}>
        <div>{name}</div>
        <div>{email}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;
