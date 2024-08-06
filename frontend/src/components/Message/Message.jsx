import React from 'react'
import styles from '../Message/Message.module.css'
const Message = ({ message, type, format }) => {
  return (
    <div className={type === 'sent' ? styles.sent : styles.received}>
      <span>{message}</span>
      <span className={styles.timeStamp}>12.00 AM</span>
    </div>
  )
}

export default Message
