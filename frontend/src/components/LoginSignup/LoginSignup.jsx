import React, { useState } from 'react'
import styles from '../LoginSignup/LoginSignup.module.css'

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleSignup = () => {
    setIsLogin(false)
  }

  const toggleLogin = () => {
    setIsLogin(true)
  }

  return (
    <div className={styles.formModal}>
      <div className={styles.formToggle}>
        <button
          id={styles.loginToggle}
          onClick={toggleLogin}
          style={{
            backgroundColor: isLogin ? '#57B846' : '#fff',
            color: isLogin ? '#fff' : '#222',
          }}
        >
          log in
        </button>
        <button
          id={styles.signupToggle}
          onClick={toggleSignup}
          style={{
            backgroundColor: isLogin ? '#fff' : '#57b846',
            color: isLogin ? '#222' : '#fff',
          }}
        >
          sign up
        </button>
      </div>

      <div
        id={styles.loginForm}
        style={{ display: isLogin ? 'block' : 'none' }}
      >
        <form>
          <input type="text" placeholder="Enter email or username" />
          <input type="password" placeholder="Enter password" />
          <button type="button" className={`${styles.btn} ${styles.login}`}>
            login
          </button>
          <p>
            <a href="#">Forgotten account</a>
          </p>
          <hr />
        </form>
      </div>

      <div
        id={styles.signupForm}
        style={{ display: isLogin ? 'none' : 'block' }}
      >
        <form>
          <input type="email" placeholder="Enter email or phone no." />
          <input type="text" placeholder="Choose username" />
          <input type="password" placeholder="Create password" />
          <button type="button" className={`${styles.btn} ${styles.signup}`}>
            create account
          </button>
          <p>
            Clicking <strong>create account</strong> means that you agree to our{' '}
            <a href="#">terms of services</a>.
          </p>
          <hr />
        </form>
      </div>
    </div>
  )
}

export default LoginSignup
