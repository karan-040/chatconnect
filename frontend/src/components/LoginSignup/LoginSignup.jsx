import React, { useState, useEffect } from 'react'
import styles from '../LoginSignup/LoginSignup.module.css'
import hidden from '../../assets/icons/hidden.png'
import visible from '../../assets/icons/visible.png'
import Otp from '../Otp/Otp'
function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)
  const [isvisible, setIsvisible] = useState(false)
  const [isavailable, setAvailable] = useState(null)
  const [username, setUsername] = useState('')
  const [debouncedUsername, setDebouncedUsername] = useState(username)
  const [showotp, setShowotp] = useState(false)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedUsername(username)
    }, 500) // 500ms debounce delay

    return () => {
      clearTimeout(handler)
    }
  }, [username])

  useEffect(() => {
    if (debouncedUsername) {
      // Perform the API call or validation here
      console.log(`Validating username: ${debouncedUsername}`)
    }
  }, [debouncedUsername])

  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  const toggleSignup = () => {
    setIsLogin(false)
  }

  const toggleLogin = () => {
    setIsLogin(true)
  }
  const toggleVisible = () => {
    setIsvisible(!isvisible)
  }
  const handleotpclose = () => {
    setShowotp(false)
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
            pointerEvents: showotp ? 'none' : 'auto',
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
          <input
            type="text"
            placeholder="Enter email or username"
            className={styles.inp}
          />
          <input
            type={isvisible ? 'text' : 'password'}
            placeholder="Enter password"
            className={`${styles.pass} ${styles.inp}`}
          />
          <img
            src={isvisible ? visible : hidden}
            alt=""
            className={styles.eye}
            onClick={toggleVisible}
          />
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
        style={{
          display: isLogin ? 'none' : 'block',
          pointerEvents: showotp ? 'none' : 'auto',
        }}
      >
        <form>
          <input
            type="email"
            placeholder="Enter email or phone no."
            className={styles.inp}
          />
          <input
            type="text"
            placeholder="Choose username"
            onChange={handleChange}
            className={styles.inp}
          />
          {isavailable != null &&
            (isavailable == true ? (
              <span className={styles.message}>available</span>
            ) : (
              <span className={styles.message} style={{ color: 'red' }}>
                not-available
              </span>
            ))}
          <input
            type="password"
            placeholder="Create password"
            className={styles.inp}
          />
          <button
            type="button"
            className={`${styles.btn} ${styles.signup}`}
            onClick={() => setShowotp(true)}
          >
            create account
          </button>
          <p>
            Clicking <strong>create account</strong> means that you agree to our{' '}
            <a href="#">terms of services</a>.
          </p>
          <hr />
        </form>
      </div>
      {showotp && (
        <div className={styles.popup}>
          <Otp otpdata={handleotpclose} />
        </div>
      )}
    </div>
  )
}

export default LoginSignup
