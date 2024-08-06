import React from 'react'
import styles from '../MessageBox/MessageBox.module.css'
import user from '../../assets/icons/user.png'
const MessageBox = () => {
  return (
    <div className={styles.messageBlock}>
      <div className={styles.imageSection}>
        <img src={user} alt="" className={styles.dp} />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.nameDateSection}>
          <h3>karan chauhan</h3>
          <span>27/03/2000</span>
        </div>
        <span>hello brother how are you</span>
      </div>
      <span className={styles.newMessage}>5</span>
    </div>
  )
}

export default MessageBox
