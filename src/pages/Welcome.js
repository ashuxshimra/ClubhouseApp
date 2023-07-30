import React from 'react'
import style from '../style/welcome.module.css'
import { Link } from 'react-router-dom'
function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
     <h1>Welcome! <img src='/images/wavinghand.gif' alt='' className={style.wave}/></h1> 
     <div className={style.WelcomeInfo}>
        <p>
        Clubhouse is a place where you can hang out with friends, meet new ones, and talk about anything. It's like an always-on dinner party.
        </p>
        <p>
        Built by a small, scrappy team of experienced builders with a strong background in consumer products with a relentless focus on our product and the community.
            </p>
            <p>
                Paul,Rohan & the Clubhouse team
            </p>
     </div>
     <div className={style.actionBtn} >
      {/* we have used Link becayse it can link to other pages without reloading so its powerful */}
      <Link exact to="/invite" className='pimaryBtn d-flex align-items-center mb-3'>
       Get your username{" "}
       {/* <img src='' alt=''/> */}
      </Link>
      <Link exact to="/invite">
      Have an invite text? Sign in
      </Link>
     </div>
    </div>
  )
}

export default Welcome
