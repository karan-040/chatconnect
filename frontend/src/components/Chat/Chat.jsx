import React, { useState } from 'react'
import styles from '../Chat/Chat.module.css'
import { MdOutlineMenu } from 'react-icons/md'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi'
import { IoCallSharp } from 'react-icons/io5'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { BsArchiveFill } from 'react-icons/bs'
import { IoFilterSharp } from 'react-icons/io5'
import { FaNotesMedical } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { CiVideoOn } from 'react-icons/ci'
import { FaMicrophone } from 'react-icons/fa'
import { FiPaperclip } from 'react-icons/fi'
import { IoSend } from 'react-icons/io5'
import MessageBox from '../MessageBox/MessageBox'
import user from '../../assets/icons/user.png'
import Message from '../Message/Message'
const Chat = () => {
  const [friend, setFriend] = useState(true) // for choosing friends
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.topSection}>
          <span className={styles.iconWrapper}>
            <MdOutlineMenu className={styles.sidebarIcons} />
          </span>
          <span className={styles.iconWrapper}>
            <BiSolidMessageRoundedDetail className={styles.sidebarIcons} />
          </span>
          <span className={styles.iconWrapper}>
            <IoCallSharp className={styles.sidebarIcons} />
          </span>
        </div>
        <div className={styles.bottomSection}>
          <span className={styles.iconWrapper}>
            <BsArchiveFill className={styles.sidebarIcons} />
          </span>
          <span className={styles.iconWrapper}>
            <IoSettingsOutline className={styles.sidebarIcons} />
          </span>
          <span className={styles.iconWrapper}>
            <IoPersonCircleSharp className={styles.sidebarIcons} />
          </span>
        </div>
      </div>
      {/* <=================================Message bar ====================> */}
      <div className={styles.messageBar}>
        <div className={styles.navbar}>
          <h1>Chats</h1>
          <div className={styles.navbarIconWrapper}>
            <span className={styles.iconWrapper}>
              <IoFilterSharp />
            </span>
            <span className={styles.iconWrapper}>
              <FaNotesMedical />
            </span>
          </div>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search or start a new chat"
          />
        </div>
        <div className={styles.messages}>
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
        </div>
      </div>
      {/* <=======================Messages Section========================> */}
      {friend ? (
        <div className={styles.userMessagesSection}>
          <div className={styles.friendInfo}>
            <div className={styles.leftSection}>
              <img src={user} alt="" className={styles.friendDp} />
              <h3>Username</h3>
            </div>
            <div className={styles.rightSection}>
              <span className={styles.iconWrapper}>
                <IoMdCall />
              </span>
              <span className={styles.iconWrapper}>
                <CiVideoOn />
              </span>
            </div>
          </div>
          <div className={styles.messagePanel}>
            <Message message="hello karan" type="sent" />
            <Message message="hello karan" type="recieved" />
            <Message message="hello karan" type="sent" />
            <Message message="hello karan" type="recieved" />
            <Message message="hello karan" type="sent" />
            <Message message="hello karan" type="recieved" />
            <Message message="hello karan" type="sent" />
            <Message message="hello karan" type="recieved" />
            <Message message="hello karan" type="sent" />
            <Message message="hello karan" type="recieved" />
            <Message message="hello karan" type="sent" />
            <Message
              message="hello karan this is the last message"
              type="recieved"
            />
          </div>
          <div className={styles.messageSendingPanel}>
            <span className={styles.iconWrapper}>
              <FaMicrophone />
            </span>
            <span className={styles.iconWrapper}>
              <FiPaperclip />
            </span>
            <textarea
              className={styles.messageInput}
              placeholder="Type a message..."
            ></textarea>
            <span className={styles.iconWrapper}>
              <IoSend />
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.banner}>Start Chatting..</div>
      )}
    </div>
  )
}

export default Chat
