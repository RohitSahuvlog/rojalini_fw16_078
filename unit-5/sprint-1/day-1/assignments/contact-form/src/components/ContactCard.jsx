import React, { useState } from 'react'
import styles from './ContactCard.module.css'

export const ContactCard = (props) => {

  const {imgurl, name, email, phone} = props;
  const [isActive, setisActive] = useState(false);
  return (
    
    <div onClick={() => setisActive(!isActive)}
       className={styles.container}>
          <img className={styles.pp} src={imgurl} alt="" />
          <div className={styles.data}>
          <div>{name}</div>
          <div>{email}</div>
          {isActive && <div> {phone }</div>}
      </div>
    </div>
    
  )
}

export default ContactCard;
