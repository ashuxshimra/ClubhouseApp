import React from 'react'
import style from '../style/header.module.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className={style.Header}>
      <Link exact to='/explore'>
        <img src='/images/search.png' alt=''/>
      </Link>
      <div className={style.nav_items}>
      <Link exact to='/invite'>
        <img src='/images/invite.png' alt=''/>
      </Link>
      <Link exact to='/home'>
        <img src='/images/calendar.png' alt=''/>
      </Link>
      <Link exact to='/home'>
        <img src='/images/noti.png' alt=''/>
      </Link>
      <Link exact to='/profile'>
        <img src='/images/b1.png' alt=''/>
      </Link>
      </div>
    </div>
  )
}

export default Header
