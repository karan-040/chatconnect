import React, { useEffect, useRef, useState } from 'react'
import otpstyles from './Otp.module.css'
import check from '../../assets/icons/checklist.png'
import cancel from '../../assets/icons/cancel.png'

const Otp = ({ otpdata }) => {
  const inputs = useRef([])
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  useEffect(() => {
    const handleKeyUp = (e, index) => {
      const currentInput = inputs.current[index]
      const nextInput = inputs.current[index + 1]
      const prevInput = inputs.current[index - 1]

      if (currentInput.value.length > 1) {
        currentInput.value = ''
        return
      }

      if (nextInput && nextInput.disabled && currentInput.value !== '') {
        nextInput.disabled = false
        nextInput.focus()
      }

      if (e.key === 'Backspace') {
        inputs.current.forEach((input, idx) => {
          if (index <= idx && prevInput) {
            input.disabled = true
            input.value = ''
            prevInput.focus()
          }
        })
      }

      const allFilled = inputs.current.every((input) => input.value !== '')
      const button = document.querySelector(`.${otpstyles.enter}`)
      if (allFilled) {
        button.classList.add(otpstyles.active)
      } else {
        button.classList.remove(otpstyles.active)
      }
    }

    inputs.current.forEach((input, index) => {
      if (input) {
        input.addEventListener('keyup', (e) => handleKeyUp(e, index))
      }
    })

    return () => {
      inputs.current.forEach((input, index) => {
        if (input) {
          input.removeEventListener('keyup', (e) => handleKeyUp(e, index))
        }
      })
    }
  }, [otpdata])

  useEffect(() => {
    if (inputs.current[0]) {
      inputs.current[0].focus()
    }
  }, [])
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
      return () => clearInterval(countdown)
    } else {
      setCanResend(true)
    }
  }, [timer])
  const handleResend = () => {
    if (canResend) {
      setTimer(30)
      setCanResend(false)
      // Logic to resend OTP code here
      console.log('OTP code resent')
    }
  }
  return (
    <div className={otpstyles.otpwrapper}>
      <img
        src={cancel}
        alt="Cancel"
        className={otpstyles.cancel}
        onClick={otpdata}
      />
      <img src={check} alt="Check" className={otpstyles.otpicon} />
      <h4 className={otpstyles.otpheading}>Enter OTP Code</h4>
      <form action="#" className={otpstyles.formfield}>
        <div className={otpstyles.inputField}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="number"
              ref={(el) => (inputs.current[index] = el)}
              disabled={index !== 0}
              className={otpstyles.inputdata}
              maxLength={1}
            />
          ))}
        </div>
        <button type="button" className={otpstyles.enter}>
          Verify OTP
        </button>
      </form>
      {canResend ? (
        <button onClick={handleResend} className={otpstyles.resendButton}>
          Resend OTP
        </button>
      ) : (
        <p className={otpstyles.timer}>Resend OTP in {timer} seconds</p>
      )}
    </div>
  )
}

export default Otp
