import React, { useState, useEffect } from 'react'
import styles from '../LoginSignup/LoginSignup.module.css'
import hidden from '../../assets/icons/hidden.png'
import visible from '../../assets/icons/visible.png'
function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)
  const [isvisible, setIsvisible] = useState(false)
  const [isavailable, setAvailable] = useState(null)
  const [username, setUsername] = useState('')
  const [debouncedUsername, setDebouncedUsername] = useState(username)

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
          <input
            type={isvisible ? 'text' : 'password'}
            placeholder="Enter password"
            className={styles.pass}
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
        style={{ display: isLogin ? 'none' : 'block' }}
      >
        <form>
          <input type="email" placeholder="Enter email or phone no." />
          <input
            type="text"
            placeholder="Choose username"
            onChange={handleChange}
          />
          {isavailable != null &&
            (isavailable == true ? (
              <span className={styles.message}>available</span>
            ) : (
              <span className={styles.message} style={{ color: 'red' }}>
                not-available
              </span>
            ))}
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
