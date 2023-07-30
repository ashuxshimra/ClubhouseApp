import React from 'react'
import style from '../style/phoneConfirmContainer.module.css'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';

function PhoneConfirmation() {
    const[value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}> 
    <Link exact to='/' className={style.backBtn}>
      <img src='/images/arrow.png' alt=''/>
    </Link>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry='IN' value={value} onChange={setValue}/>
      <p>By entering your number, your're agreeing to our{" "} <span> Terms of Service and Privacy Policy 
        </span> <span>,Thanks!</span>
        </p>
        <Link exact to="/code_confirm" className='primaryBtn d-flex align-items-center'>
          Next <img src='/images/nextArrowIcon.svg' alt=''/>
        </Link>
    </div> 
  )
}

export default PhoneConfirmation
