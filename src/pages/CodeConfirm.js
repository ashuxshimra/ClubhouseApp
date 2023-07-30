import React from 'react'
import style from '../style/phoneConfirmContainer.module.css'
import { Link } from 'react-router-dom'
function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
        <Link exact to='/' className={style.backBtn}>
        <img src='/images/arrow.png' alt=''/>
        </Link>
      <div className='text-center'>
        {/* note that the above is a bootstrap div container which is styled text-center so it makes things easier if something needs to be at the center of screeen hence used directly here */}
      <h1 style={{width: '100%', maxWidth:"200px", marginBottom: '1em'}}>
        Enter the code we just texted you.
      </h1>
      <input type='text' style={{
        width: "100%",
        border: "none",
        // we want the text to appear from center
        textAlign: "center",
        outline: "none",
      }}/>
      <p className='mt-2'>
        Didn't receive it?<span>Tap to resend.</span>
      </p>
      <Link exact to="/allow_notification" className='primaryBtn d-flex align-items-center justify-content-center'>
            Next <img src='/images/nextArrowIcon.svg' alt=''/>  
          </Link>
      </div>
    </div>
  )
}

export default CodeConfirm
